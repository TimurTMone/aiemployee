/**
 * Google Sheets integration for lead storage and tracking.
 */
import { google } from 'googleapis';
import { config } from '../config.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SHEET_HEADERS = [
  'name',
  'clinic_name',
  'location',
  'linkedin_profile',
  'status',
  'message_sent',
  'reply',
  'demo_booked',
];

/**
 * Get authenticated Google Sheets client.
 */
async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: join(__dirname, '..', 'service-account.json'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

function requireSheetId() {
  if (!config.sheetId) {
    console.error('Error: GOOGLE_SHEET_ID is not set.');
    console.error('1. Create a .env file in linkedin-automation/');
    console.error('2. Add: GOOGLE_SHEET_ID=your-sheet-id-here');
    console.error('   (Get the ID from your Google Sheet URL: docs.google.com/spreadsheets/d/SHEET_ID/edit)');
    process.exit(1);
  }
}

/**
 * Initialize sheet with headers if empty.
 */
export async function initSheet() {
  requireSheetId();
  const sheets = await getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: config.sheetId,
    range: 'Leads!A1:H1',
  });
  const rows = res.data.values || [];
  if (rows.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: config.sheetId,
      range: 'Leads!A1:H1',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [SHEET_HEADERS] },
    });
    console.log('Sheet initialized with headers');
  }
}

/**
 * Append leads to the sheet.
 */
export async function appendLeads(leads) {
  requireSheetId();
  const sheets = await getSheetsClient();
  const rows = leads.map((lead) => [
    lead.name || '',
    lead.clinic_name || '',
    lead.location || '',
    lead.linkedin_profile || '',
    lead.status || 'new',
    lead.message_sent || '',
    lead.reply || '',
    lead.demo_booked || '',
  ]);
  await sheets.spreadsheets.values.append({
    spreadsheetId: config.sheetId,
    range: 'Leads!A:H',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: rows },
  });
  console.log(`Appended ${leads.length} leads`);
}

/**
 * Get all leads from the sheet.
 */
export async function getLeads() {
  requireSheetId();
  const sheets = await getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: config.sheetId,
    range: 'Leads!A2:H',
  });
  const rows = res.data.values || [];
  return rows.map((row) => ({
    name: row[0] || '',
    clinic_name: row[1] || '',
    location: row[2] || '',
    linkedin_profile: row[3] || '',
    status: row[4] || 'new',
    message_sent: row[5] || '',
    reply: row[6] || '',
    demo_booked: row[7] || '',
  }));
}

/**
 * Update a lead's status by row index.
 * @param rowIndex 0-based (0 = first data row, i.e. sheet row 2)
 */
export async function updateLeadStatus(rowIndex, updates) {
  requireSheetId();
  const sheets = await getSheetsClient();
  const sheetRow = rowIndex + 2; // Row 1 = header
  const range = `Leads!A${sheetRow}:H${sheetRow}`;
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: config.sheetId,
    range,
  });
  const row = (res.data.values || [])[0] || [];
  const lead = {
    name: row[0] || '',
    clinic_name: row[1] || '',
    location: row[2] || '',
    linkedin_profile: row[3] || '',
    status: updates.status ?? row[4],
    message_sent: updates.message_sent ?? row[5],
    reply: updates.reply ?? row[6],
    demo_booked: updates.demo_booked ?? row[7],
  };
  await sheets.spreadsheets.values.update({
    spreadsheetId: config.sheetId,
    range: `Leads!A${sheetRow}:H${sheetRow}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [[lead.name, lead.clinic_name, lead.location, lead.linkedin_profile, lead.status, lead.message_sent, lead.reply, lead.demo_booked]] },
  });
}

#!/usr/bin/env node
/**
 * Import leads from CSV into Google Sheets.
 *
 * Expected CSV columns: name, clinic_name, location, linkedin_profile
 * Or: name, linkedin_profile (minimal - enrich later)
 *
 * Usage: node scripts/import-leads.js path/to/leads.csv
 */
import { readFileSync } from 'fs';
import { initSheet, appendLeads } from '../lib/sheets.js';

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') inQuotes = !inQuotes;
    else if (c === ',' && !inQuotes) {
      result.push(current.trim().replace(/^"|"$/g, ''));
      current = '';
    } else current += c;
  }
  result.push(current.trim().replace(/^"|"$/g, ''));
  return result;
}

function parseCSV(content) {
  const lines = content.trim().split('\n');
  if (lines.length < 2) return [];
  const headers = parseCSVLine(lines[0]).map((h) => h.toLowerCase().replace(/\s/g, '_'));
  const leads = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const lead = {};
    headers.forEach((h, idx) => {
      lead[h] = values[idx] || '';
    });
    // Map common column names
    const mapped = {
      name: lead.name || lead.full_name || lead.first_name || '',
      clinic_name: lead.clinic_name || lead.company || lead.organization || '',
      location: lead.location || lead.city || lead.region || '',
      linkedin_profile: lead.linkedin_profile || lead.linkedin || lead.profile_url || '',
      status: 'new',
    };
    if (mapped.name || mapped.linkedin_profile) {
      leads.push(mapped);
    }
  }
  return leads;
}

async function main() {
  const path = process.argv[2];
  if (!path) {
    console.log('Usage: node scripts/import-leads.js path/to/leads.csv');
    process.exit(1);
  }
  const content = readFileSync(path, 'utf-8');
  const leads = parseCSV(content);
  if (leads.length === 0) {
    console.log('No leads found in CSV');
    process.exit(1);
  }
  console.log(`Parsed ${leads.length} leads`);
  await initSheet();
  await appendLeads(leads);
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

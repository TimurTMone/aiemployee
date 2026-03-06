#!/usr/bin/env node
/**
 * Update lead status in Google Sheets.
 *
 * Usage:
 *   node scripts/update-status.js <row_index> <status> [message_sent] [reply] [demo_booked]
 *
 * Example: node scripts/update-status.js 2 contacted "Hi Dr Smith,..." "" ""
 * Example: node scripts/update-status.js 2 replied "" "Yes interested" ""
 * Example: node scripts/update-status.js 2 demo_booked "" "" "2024-03-15 2pm"
 *
 * Statuses: new | contacted | replied | demo_booked | lost
 */
import { updateLeadStatus } from '../lib/sheets.js';

async function main() {
  const rowIndex = parseInt(process.argv[2], 10);
  const status = process.argv[3];
  const messageSent = process.argv[4];
  const reply = process.argv[5];
  const demoBooked = process.argv[6];

  if (!rowIndex || isNaN(rowIndex) || !status) {
    console.log('Usage: node scripts/update-status.js <row_index> <status> [message_sent] [reply] [demo_booked]');
    process.exit(1);
  }

  const updates = { status };
  if (messageSent !== undefined) updates.message_sent = messageSent;
  if (reply !== undefined) updates.reply = reply;
  if (demoBooked !== undefined) updates.demo_booked = demoBooked;

  await updateLeadStatus(rowIndex - 1, updates); // User passes 1-based row number
  console.log('Updated.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

#!/usr/bin/env node
/**
 * Generate personalized LinkedIn messages for leads.
 *
 * Usage: node scripts/generate-messages.js [template]
 *   template: template_1 | template_2 | template_3 | follow_up_1 | follow_up_2 | demo_booking
 */
import { getLeads } from '../lib/sheets.js';
import { generateMessage } from '../lib/messages.js';

async function main() {
  const templateKey = process.argv[2] || 'template_1';
  const leads = await getLeads();
  const toMessage = leads.filter((l) => l.status === 'new' || l.status === 'follow_up');
  if (toMessage.length === 0) {
    console.log('No leads to message (status: new or follow_up)');
    process.exit(0);
  }
  console.log(`Generating ${templateKey} for ${toMessage.length} leads:\n`);
  toMessage.forEach((lead, i) => {
    const msg = generateMessage(lead, templateKey);
    console.log(`--- ${lead.name} (${lead.clinic_name || 'no clinic'}) ---`);
    console.log(msg);
    console.log('');
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

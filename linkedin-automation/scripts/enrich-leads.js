#!/usr/bin/env node
/**
 * Enrich leads with clinic name and location.
 *
 * Options:
 * 1. Manual: Export from LinkedIn/PhantomBuster with company/location - they come in the CSV
 * 2. This script: Reads leads from sheet, you can add enrichment logic (e.g. Clearbit, Apollo)
 *
 * For now, this reads the sheet and outputs leads that need enrichment.
 * Add your enrichment API calls (e.g. LinkedIn profile scrape, Clearbit) as needed.
 */
import { getLeads } from '../lib/sheets.js';

async function main() {
  const leads = await getLeads();
  const needEnrichment = leads.filter((l) => !l.clinic_name || !l.location);
  console.log(`Total leads: ${leads.length}`);
  console.log(`Need enrichment: ${needEnrichment.length}`);
  needEnrichment.forEach((l, i) => {
    console.log(`${i + 1}. ${l.name} | ${l.linkedin_profile} | clinic: ${l.clinic_name || '?'} | loc: ${l.location || '?'}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

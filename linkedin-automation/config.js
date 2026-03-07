/**
 * Configuration for LinkedIn outbound automation.
 * Copy .env.example to .env and fill in values.
 */
import 'dotenv/config';

const UTM = 'utm_source=linkedin&utm_medium=outbound&utm_campaign=dentist_suite';

export const config = {
  sheetId: process.env.GOOGLE_SHEET_ID,
  openaiKey: process.env.OPENAI_API_KEY,
  demoLink: `https://aiemployee-alpha.vercel.app/ai-receptionist-for-dentists?${UTM}`,
  demoFormLink: `https://aiemployee-alpha.vercel.app/?${UTM}#demo-form`,
};

/**
 * Configuration for LinkedIn outbound automation.
 * Copy .env.example to .env and fill in values.
 */
import 'dotenv/config';

export const config = {
  sheetId: process.env.GOOGLE_SHEET_ID,
  openaiKey: process.env.OPENAI_API_KEY,
  demoLink: 'https://aiemployee-alpha.vercel.app/ai-receptionist-for-dentists',
  demoFormLink: 'https://aiemployee-alpha.vercel.app/#demo-form',
};

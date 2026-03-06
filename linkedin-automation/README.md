# LinkedIn Outbound Automation

System for importing dentist leads, storing in Google Sheets, generating personalized messages, and tracking outreach.

## Workflow

```
LinkedIn lead → CSV export → Import to Google Sheet → Generate message → Track status
```

## Setup

### 1. Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project (or use existing)
3. Enable **Google Sheets API**
4. Create **Service Account** credentials
5. Download JSON key, save as `service-account.json` in this folder
6. Create a new Google Sheet
7. Share the sheet with the service account email (from the JSON)
8. Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`

### 2. Environment

```bash
cp .env.example .env
# Edit .env: set GOOGLE_SHEET_ID
```

### 3. Install

```bash
cd linkedin-automation
npm install
```

## Usage

### Import leads from CSV

Create a CSV with columns: `name`, `clinic_name`, `location`, `linkedin_profile`

(Or: `name`, `linkedin_profile` for minimal — enrich later)

```bash
npm run import -- path/to/leads.csv
```

### Generate messages

```bash
# Initial outreach (template 1)
npm run generate -- template_1

# Other templates: template_2, template_3, follow_up_1, follow_up_2, demo_booking
npm run generate -- template_2
npm run generate -- follow_up_1
npm run generate -- demo_booking
```

### Update status

```bash
# Row 2, mark as contacted
node scripts/update-status.js 2 contacted "Hi Dr Smith, ..."

# Row 2, got reply
node scripts/update-status.js 2 replied "" "Yes interested"

# Row 2, demo booked
node scripts/update-status.js 2 demo_booked "" "" "2024-03-15 2pm"
```

## Sheet columns

| Column          | Description                         |
|-----------------|-------------------------------------|
| name            | Contact name                        |
| clinic_name     | Practice/clinic name                |
| location        | City, state                         |
| linkedin_profile| LinkedIn URL                        |
| status          | new \| contacted \| replied \| demo_booked \| lost |
| message_sent    | Copy of message sent                |
| reply           | Their reply                         |
| demo_booked     | Demo date/time if booked            |

## Message templates

See `MESSAGE-TEMPLATES.md` for all templates.

## LinkedIn scraping

LinkedIn's ToS restricts scraping. Use tools like:

- **PhantomBuster** — exports to CSV/Sheets
- **Dux-Soup** — export connections
- **Manual export** — Sales Navigator list export

Import the CSV with this system.

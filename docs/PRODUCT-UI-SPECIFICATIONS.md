# Product UI Specifications — SaaS Mockups

## 1. AI Chat Interface

**Purpose:** Website chat widget where patients message the AI.

**Layout:**
- Bottom-right floating chat bubble (32×32px, rounded)
- Expands to 380×520px modal
- Header: clinic name + "Chat with us"
- Message bubbles: patient (right, light gray #F1F5F9), AI (left, white with border #E2E8F0)
- Input: single line, placeholder "Type your message..."
- Typing indicator: "..." animation when AI "thinks"

**Example content:**
```
[Patient] Hi, do you accept new patients?
[AI] Yes! We welcome new patients. What type of appointment do you need?
[Patient] Cleaning
[AI] We have Tuesday 2pm and Thursday 10am. Which works?
```

**Design notes:**
- Clean sans-serif (Inter or similar)
- Rounded corners (12px)
- Shadow: 0 4px 12px rgba(0,0,0,0.1)

---

## 2. AI Call Assistant

**Purpose:** Incoming call handling screen.

**Layout:**
- Phone-shaped frame (or smartphone mockup)
- Incoming call: "Unknown" or patient name if known
- AI greeting: "Thank you for calling [Clinic]. How can I help you today?"
- On-screen options: "Book appointment" | "Get info" | "Speak to staff"
- Progress: "AI is assisting..." with subtle pulse

**Visual:**
- Dark mode (slate-900) for contrast
- Green "Answer" style when AI picks up
- Minimal, calm aesthetic

---

## 3. Appointment Booking Flow

**Purpose:** Calendar picker + time slots.

**Layout:**
- Month view calendar (7×6 grid)
- Available dates: green dot or highlight
- Selected date: solid green bg
- Time slots below: horizontal pills (9:00 AM, 9:30 AM, 10:00 AM...)
- Selected slot: green border
- "Confirm booking" button
- Confirmation: "You're booked for Tuesday, Mar 12 at 2:00 PM. We'll send a reminder."

**Design notes:**
- White background, subtle borders
- Primary action: green (#059669) or slate-900

---

## 4. Lead Qualification Screen

**Purpose:** Captured lead details before handoff.

**Layout:**
- Card layout: patient name, phone, email, intent (e.g., "New patient - cleaning")
- Status badge: "Qualified" (green) | "Needs follow-up" (amber)
- "Route to staff" button
- Source: "Website chat" | "Phone" | "SMS"
- Timestamp

**Visual:**
- CRM-style list or table
- Clean typography, adequate spacing

---

## 5. Analytics Dashboard

**Purpose:** Key metrics for the practice.

**Layout:**
- Header: "Inquiries this week"
- 4 metric cards:
  1. Total inquiries: 47
  2. Booked: 23
  3. Response time: &lt; 15 sec
  4. Missed: 0
- Simple bar or line chart: inquiries by day
- List: "Recent conversations" (last 5)

**Design notes:**
- SaaS dashboard style (Linear, Vercel inspired)
- Light gray cards (#F8FAFC)
- Dark text (#0F172A)
- Chart: minimal, 2–3 colors

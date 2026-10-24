# Celestius Campus — College Club Events Website 🫧

A modern, responsive, and student-friendly College Club Events Website built exclusively with **semantic HTML5, vanilla CSS3, and modern vanilla JavaScript (ES6+)** for the **Celestius Frontend Recruitment Task**.

Designed around a soft, playful, and polished **"bubble" aesthetic** with a vibrant color palette of **pink, dark purple, soft lavender, white, subtle grey accents, and bright yellow highlights**.

---

## 🌟 Key Highlights & Design Aesthetic

- **Playful Bubble Aesthetic**: Rounded shapes, gentle multi-stop gradients, ambient floating background bubbles, and tactile hover interactions.
- **Curated Color Palette**:
  - **Dark Purple** (`#1B0B30`, `#2A1245`, `#3D1C63`): High-contrast, WCAG AAA-compliant text and headings.
  - **Vibrant Pink** (`#EC4899`, `#FCE7F3`): Primary call-to-actions, badges, and cheerful glow accents.
  - **Soft Lavender** (`#FAF7FD`, `#EDE9FE`, `#F3EEFA`): Cozy card backdrops and pill badges.
  - **Bright Yellow** (`#FBBF24`, `#FDE047`): Small highlight badges (`★ Featured`, `🔥 Hot Flagship`, star accents).
- **Accessibility & UX**:
  - Accessible contrast ratios across all screen modes.
  - Full keyboard navigation support (Tab / Shift+Tab) with high-visibility pink focus rings (`:focus-visible`).
  - Native `prefers-reduced-motion` compliance to respect users who prefer minimal motion.
  - Decorative bubbles have `pointer-events: none` to never block clicks or interactions.
- **Fail-Safe Image System**: All event cards and modals include automatic inline SVG gradient fallbacks (`onerror`) to guarantee zero broken image icons even if offline.

---

## 🚀 Features Implemented

### 1. Homepage & Hero Section
- **Sticky Frosted Glass Navbar**: Logo with animated bubble icon, smooth navigation links (Home, Events, Clubs, Register, Contact), and mobile drawer toggle.
- **Hero Section**:
  - Heading: *"Discover Campus Life"* with glowing gradient typography.
  - Catchy student-first description.
  - Call-to-action buttons (*"Explore Events"* and *"Quick RSVP"*).
  - Floating ambient hero bubbles and real-time metric counter (8+ Active Clubs, 1,400+ Students, 100% Free & Fun).
  - Interactive mini feature card with avatar stacks and countdown badge.

### 2. Event Cards & Filter Engine
- **8 Diverse Campus Events**:
  1. `ByteHacks 2026: 24-Hour Code Sprint` — ZeroOne Coding Club
  2. `PromptVerse: Generative AI & LLM Workshop` — NeuralPulse AI Guild
  3. `Golden Hour Photo Walk & Portrait Class` — Shutterbugs Society
  4. `Crescendo Sunset Jam & Acoustic Open Mic` — Crescendo Music Hub
  5. `SyncStep: Street Dance Cypher & Showcase` — Groove Motion Crew
  6. `Campus Pitch Tank: Student Startup Blitz` — E-Cell Venture Guild
  7. `GameCrafter: 48h Indie Game Jam` — ZeroOne Coding Club
  8. `DesignSpark: UI/UX & Micro-Interaction Sprint` — Shutterbugs Society
- **Real-Time Search Bar**: Live instantaneous filtering by title, club name, venue, or keywords with a one-click clear button.
- **Category Filter Pills**: Filter dynamically by *All Events*, *Coding & Tech*, *AI & Robotics*, *Photography & Arts*, *Music & Audio*, *Dance & Motion*, and *Entrepreneurship*.
- **Sorting Options**: Sort by *Featured First*, *Date (Soonest)*, or *Name (A → Z)*.
- **Friendly Empty State**: Interactive bubble graphic with a *"Reset Filters & View All"* recovery button when zero results match.

### 3. Dedicated Event Details Modal View
- Clicking **"View Details"** opens an accessible modal with:
  - High-res event banner image.
  - Club organizer, date & time, campus venue, and registration fee.
  - In-depth event description, eligibility guidelines, and participation format (Solo / Team).
  - Perks, awards, and certificate tags.
  - A prominent **"Register Now For Free"** button that automatically pre-selects the event in the Registration Form and smooth-scrolls to the form!
  - Keyboard `Escape` key and backdrop click dismissal.
  - Deep link / URL hash support (e.g. `#event-bytehacks-2026`).

### 4. Interactive Registration Form
- **Form Fields**:
  - Student Full Name (required, min 2 characters)
  - Student Email Address (required, regex email validation)
  - College / Department (required)
  - Year of Study (dropdown from 1st Year to Postgraduate)
  - Selected Event (dynamic dropdown synced with campus events)
  - Guidelines & Attendance Agreement (custom styled checkbox)
- **Accessible Validation**: Clear inline error messages, visible error borders, and `aria-invalid` attributes.
- **Confirmation Ticket Modal**:
  - Generates a unique Ticket ID (`CLST-2026-B###`).
  - Displays student name, email, event title, date, and venue.
  - Celebratory confetti/bubble particle animation on submission.
  - Friendly notice indicating that this is a frontend-only demo submission ready for reviewer evaluation.

### 5. Meet The Clubs & FAQ
- **Campus Communities Grid**: Dedicated cards for all 6 flagship college clubs with member counts, descriptions, and one-click event filters.
- **Accessible FAQ Accordion**: Expandable questions addressing common student inquiries about event passes, freshman eligibility, and certificates.
- **Footer**: Social media bubble links, weekly newsletter subscription placeholder, category quick links, and a *"Back to Top"* button.

---

## 📁 File Structure

```text
clg club event website/
├── index.html        # Semantic HTML5 structure with accessibility landmarks
├── style.css         # Custom CSS3 design system, bubble animations & media queries
├── script.js         # Vanilla JS application state, search, filters & form logic
└── README.md         # Documentation & deployment guide
```

---

## 💻 How to Run Locally

You can run this project in any modern web browser without any build tools or dependencies:

### Method 1: Direct File Open
Simply double-click or drag and drop [index.html](file:///c:/Users/VEERARAGHAVAN%20R/OneDrive/Desktop/clg%20club%20event%20website/index.html) into any browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local HTTP Server (Recommended)
Using Node.js:
```bash
npx serve .
# or
npx http-server .
```
Navigate to `http://localhost:3000` (or the port indicated in the terminal).

---

## 🌐 How to Deploy to GitHub Pages

To submit your live URL for the **Celestius Frontend Recruitment Task**, deploy it for free using GitHub Pages in 4 simple steps:

### Step 1: Initialize Git and Commit
Open PowerShell or your terminal in this project folder:
```bash
cd "c:\Users\VEERARAGHAVAN R\OneDrive\Desktop\clg club event website"
git init
git add .
git commit -m "feat: complete modern college club events website for Celestius recruitment"
```

### Step 2: Create a GitHub Repository
1. Log into your account on [GitHub.com](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Name it (e.g., `celestius-club-events` or `college-club-events`).
4. Keep it **Public** and do not add a README, .gitignore, or license (they are already created).
5. Click **Create repository**.

### Step 3: Push to GitHub
Copy the commands shown on GitHub:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### Step 4: Turn on GitHub Pages
1. Go to your repository on GitHub.
2. Click on **Settings** (tab on top).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Branch**:
   - Select branch: `main`
   - Select folder: `/(root)`
   - Click **Save**.
5. Wait 1–2 minutes. Refresh the page, and GitHub will provide your live URL:
   ```text
   https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/
   ```

You can now submit this live link and your repository URL for the Celestius task!

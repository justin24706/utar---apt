# UTAR CGPA Calculator

A Progressive Web App (PWA) for UTAR students to track, calculate, and plan their academic performance — works offline, installable on any device.

**[Live Demo →] https://justin24706.github.io/utar---apt/**

---

## Features

**Dashboard**
- At-a-glance view of current CGPA, target CGPA, total credits earned, and semesters recorded
- Visual CGPA progress bar with classification labels (Pass / Second Class / First Class)
- Set and track a target CGPA with live gap indicator
- Recent semesters summary

**Current Semester**
- Add subjects with course code, credit hours, and expected grade
- Real-time GPA and projected CGPA calculation
- Prior CGPA and credits auto-filled from history
- Save semester directly to history

**Semester History**
- Full record of all past semesters
- Per-semester GPA, credits, and cumulative CGPA
- Add, edit, or delete any semester manually

**Analysis**
- Target CGPA analysis — shows required GPA for remaining semesters
- Final Exam Planner — calculates marks needed in finals to achieve each grade per subject

**Import PDF**
- Import academic transcript PDF to auto-populate semester history
- Import tuition fee bill PDF to auto-load current semester courses (course code, name, credit hours)

**Data Management**
- Export all data as JSON backup
- Import JSON to restore data
- All data stored locally in the browser — nothing leaves your device

---

## Tech Stack

| | |
|---|---|
| **Frontend** | Vanilla HTML, CSS, JavaScript — zero frameworks, zero dependencies |
| **PDF Parsing** | PDF.js (loaded from CDN) |
| **Fonts** | Barlow / Barlow Condensed (Google Fonts) |
| **PWA** | Web App Manifest + Service Worker (cache-first, full offline support) |
| **Storage** | localStorage — client-side only |
| **Hosting** | GitHub Pages |

---

## Installation (as App)

This is a PWA — no app store needed.

**Android (Chrome)**
1. Open the site in Chrome
2. Tap the three-dot menu → **Add to Home screen**
3. Tap **Install**

**iPhone / iPad (Safari)**
1. Open the site in Safari (must be Safari — Chrome on iOS does not support PWA install)
2. Tap the Share button → **Add to Home Screen**
3. Tap **Add**

Once installed, the app opens full-screen and works completely offline.

---

## Run Locally

No build step required. Just open the file:

```bash
git clone https://github.com/yourusername/utar-cgpa.git
cd utar-cgpa
```

Then open `index.html` in your browser, or serve with any static server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

> **Note:** The Service Worker requires a server to function. Opening `index.html` directly via `file://` will work but offline caching won't be active.

---

## Project Structure

```
utar-cgpa/
├── index.html      # Entire app — UI, logic, styles in one file
├── sw.js           # Service Worker — handles caching and offline support
├── manifest.json   # PWA manifest — app name, icons, display mode
└── README.md
```

---

## CGPA Grading Reference

This calculator follows the UTAR grading system:

| Grade | Grade Point | Marks |
|-------|------------|-------|
| A+ | 4.00 | 90 – 100 |
| A  | 4.00 | 80 – 89  |
| A- | 3.67 | 75 – 79  |
| B+ | 3.33 | 70 – 74  |
| B  | 3.00 | 65 – 69  |
| B- | 2.67 | 60 – 64  |
| C+ | 2.33 | 55 – 59  |
| C  | 2.00 | 50 – 54  |
| C- | 1.67 | 45 – 49  |
| D+ | 1.33 | 40 – 44  |
| D  | 1.00 | 35 – 39  |
| F  | 0.00 | 0 – 34   |

---

## Disclaimer

This is an **unofficial** student project and is not affiliated with, endorsed by, or connected to Universiti Tunku Abdul Rahman (UTAR) in any way. All calculations are for reference only — always verify with your official academic transcript.

The UTAR name and logo are used solely to identify compatibility with UTAR's grading system and are the property of Universiti Tunku Abdul Rahman. This project is not affiliated with or endorsed by UTAR.

---

## License

MIT License — free to use, modify, and distribute. See [LICENSE](LICENSE) for details.

---

*Built for UTAR students*

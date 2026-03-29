# Dream Team JLT - Cat Welfare Website

A website for a community cat welfare group in JLT, Dubai. Showcases cat profiles, tracks veterinary bills, and helps connect people with cats that need support or a home.

![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-yellow)
![MUI](https://img.shields.io/badge/Material%20UI-5.15-purple)

## Features

- **Landing Page** - Hero section, mission statement, and ways to help
- **Cats Gallery** - Searchable, filterable grid of all cats (stray and homed sections)
- **Cat Details** - Full profile with location, notes, vet bills, and prev/next navigation within section
- **Donate Page** - Payment instructions and other ways to contribute
- **Dark / Light Mode** - System preference detected on first load, persists across sessions
- **Pending Bills Indicator** - Red badge on cats with unpaid vet bills
- **TNR & Adoptable Badges** - At-a-glance status on each cat card
- **Responsive Design** - Works on desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/sd100596/Dream-Team-JLT.git
cd Dream-Team-JLT
npm install
npm run dev
```

### Building for Production

```bash
npm run build
```

Built files will be in the `dist/` folder.

## Adding a New Cat

Create a folder under `src/data/cats/` named after the cat:

```
src/data/cats/
└── CatName/
    ├── profile.json
    ├── vet_bills.json
    └── photo.jpg        # also accepts .jpeg or .png
```

### profile.json

```json
{
  "bio": "A short description of the cat",
  "location": "Where the cat lives (use \"Homed\" if adopted)",
  "age": 3,
  "breed": "Domestic Shorthair",
  "gender": "Female",
  "tnr": true,
  "adoptable": false,
  "notes": ["Friendly", "Vaccinated"]
}
```

- Set `"location": "Homed"` to move the cat into the Homed section of the gallery
- `notes` is optional — omit or leave as `[]` if none

### vet_bills.json

```json
[
  {
    "description": "Vaccination",
    "date": "2026-04-15",
    "amount": 45,
    "status": "unpaid"
  },
  {
    "description": "Checkup",
    "date": "2026-03-01",
    "amount": 50,
    "status": "paid"
  }
]
```

- `status` must be `"unpaid"` or `"paid"`
- Use an empty array `[]` if the cat has no bills

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool
- **Material UI 5** - Component library
- **React Router 6** - Navigation
- **Vercel Analytics** - Usage tracking (no ad cookies)

## License

MIT License

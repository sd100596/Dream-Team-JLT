# 🐱 Dream Team JLT - Cat Support Group Website

A beautiful, playful website for a cat support group that displays cat profiles with their details, location, and veterinary bills.

![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-yellow)
![MUI](https://img.shields.io/badge/Material%20UI-5.15-purple)

## ✨ Features

- 🏠 **Landing Page** - Beautiful hero section with mission statement and FAQ accordion
- 🐱 **Cats Gallery** - Responsive grid of cat profiles with photo-frame styled cards
- 📋 **Cat Details** - Full profile view with location, notes, and veterinary bills
- 🔴 **Pending Bills Indicator** - Red exclamation badge on cats with unpaid vet bills
- 📄 **PDF Viewer** - View and download attached PDF invoices for vet bills
- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/sd100596/Dream-Team-JLT.git
cd Dream-Team-JLT

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## 🐈 Adding New Cats

Adding a new cat is easy! Just create a new folder in `src/data/cats/` with the cat's name:

```
src/data/cats/
├── CatName/
│   ├── profile.json      # Cat information
│   ├── vet_bills.json    # Veterinary bills
│   ├── photo.jpg         # Profile photo (optional)
│   └── bill-id.pdf       # PDF invoices (optional)
```

### profile.json

```json
{
  "bio": "A short description of the cat",
  "location": "Where the cat is located",
  "age": 3,
  "breed": "Cat breed",
  "gender": "Male/Female",
  "notes": ["Note 1", "Note 2"]
}
```

### vet_bills.json

```json
[
  {
    "description": "Vaccination",
    "dueDate": "2026-04-15",
    "amountDue": 45,
    "status": "due"
  }
]
```

For bills with PDFs, name the PDF file matching the bill ID: `<folderName>-bill-<index>.pdf`

Example: If the folder is `Maple` and it's the first bill, name the PDF `Maple-bill-1.pdf`

## 🎨 Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Material UI** - Component library
- **React Router** - Navigation

## 📄 License

MIT License

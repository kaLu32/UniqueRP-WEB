# UniqueRP-WEB

Web application for the UniqueRP project - a modern frontend built with React and Vite.

## Technologies

### Frontend Framework
- **React** 19 - JavaScript library for building user interfaces
- **Vite** 7 - Fast build tool and development server with hot module replacement (HMR)
- **React Router** 7 - Routing for navigation between pages

### Styling & CSS
- **Tailwind CSS** 4 - Utility-first CSS framework
- **PostCSS** 8 - Tool for CSS transformations
- **Autoprefixer** - Automatically adds vendor prefixes

### Developer Tools
- **ESLint** 9 - Static analyzer for finding code errors
- **TypeScript Types** - Type safety for React components

## Installation

### Prerequisites
- **Node.js** version 16 or higher
- **npm** or **yarn** package manager

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/your-repo/UniqueRP-WEB.git
cd UniqueRP-WEB
```

2. **Install dependencies:**
```bash
npm install
```

## Setup & Running

### Development Server
Start the development server with hot reload:
```bash
npm run dev
```
The server will be available at `http://localhost:5173` (or another port if available)

### Production Build
Create an optimized build for production:
```bash
npm run build
```
The build will be in the `dist/` directory

### Preview Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Check code for errors and style issues:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Gallery.jsx
│   ├── VideoSection.jsx
│   ├── Journey.jsx
│   ├── Rules.jsx
│   ├── StaffMembers.jsx
│   ├── CreatorsGallery.jsx
│   ├── UpdateLog.jsx
│   └── Footer.jsx
├── maincomponents/      # Main pages/sections
│   ├── Home.jsx
│   ├── Content.jsx
│   ├── ContentCreators.jsx
│   ├── Server.jsx
│   └── Staff.jsx
├── assets/              # Images, videos, and other media
├── App.jsx              # Main application
└── main.jsx             # Entry point
```

## Configuration

### Vite Configuration
See `vite.config.js` for Vite settings

### Tailwind CSS
See `tailwind.config.js` for CSS customization

### ESLint
See `eslint.config.js` for code linting rules

## Development Workflow

1. **Create a new branch:**
```bash
git checkout -b feature/new-feature
```

2. **Make changes** and test locally with `npm run dev`

3. **Check code with linter:**
```bash
npm run lint
```

4. **Commit and push:**
```bash
git add .
git commit -m "Description of changes"
git push origin feature/new-feature
```

## Deployment

Before deploying to production:
1. Run `npm run build` and check the `dist/` directory
2. Run `npm run lint` to check for any errors
3. Test the build locally with `npm run preview`

## License & Information

- Node modules and all dependencies are for internal use
- For more information, see `package.json`

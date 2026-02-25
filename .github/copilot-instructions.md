# Project Guidelines

## Code Style
- TypeScript + React functional components; see src/App.tsx and src/ThemeToggle.tsx.
- Tailwind CSS v4 via @tailwindcss/vite; utility classes in JSX and base styles in src/index.css.
- Keep UI logic in components and prefer simple hooks (useState/useEffect) as in src/ThemeToggle.tsx.

## Architecture
- Vite app with entry in index.html and bootstrapped in src/main.tsx.
- App shell in src/App.tsx; theme logic in src/ThemeToggle.tsx.
- Dark mode works by toggling the "dark" class on documentElement (see src/ThemeToggle.tsx).

## Build and Test
- Install: npm install
- Dev server: npm run dev
- Production build: npm run build
- Preview: npm run preview
- Container: docker build -t mortware . && docker run --rm -p 8080:80 mortware

## Project Conventions
- Theme preference stored in localStorage key "mortware-theme"; remove key for system mode.
- Tailwind content paths are limited to index.html and src/**/*.{js,ts,jsx,tsx} (tailwind.config.js).
- Vite dev server runs on port 3000 (vite.config.ts).

## Integration Points
- No external APIs detected; app is a static client build.

## Security
- No auth flows detected; avoid adding secrets to client code or localStorage.

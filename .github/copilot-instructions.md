# Project Guidelines

## Code Style
- TypeScript + React functional components with strict type checking.
- Tailwind CSS v4 via @tailwindcss/vite; utility classes in JSX and base styles in src/index.css.
- Prefer simple hooks (useState/useEffect) and avoid unnecessary useMemo/useCallback.
- Import type safety utilities from src/utils/cn.ts for classname merging.

## Architecture
- **Routing:** BrowserRouter (react-router-dom) with two main routes:
  - `/` - Home page (centered "mortware" label)
  - `/resume` - Resume page with work history, education, skills
- **App Entry:** index.html → src/main.tsx (BrowserRouter) → src/App.tsx (Routes)
- **Resume Structure:**
  - src/resume/ResumePage.tsx - Main resume layout
  - src/resume/components/ - Reusable components (ResumeHeader, ResumeHistory, ResumeSection, Tags)
  - src/resume/resume-data.ts - Data source for all resume content
  - src/resume/models.ts - TypeScript interfaces for resume data
- **Theme System:** Dark mode toggles "dark" class on documentElement; stored in localStorage.
- **Icons:** src/components/Icon.tsx provides SVG icons for resume links (linkedin, github, etc.).
- **Utilities:** src/utils/cn.ts for conditional classname merging.

## Build and Deployment
- **Local:**
  - `npm install` - Install dependencies
  - `npm run dev` - Dev server on port 3000
  - `npm run build` - Production build to dist/
  - `npm run preview` - Preview production build
- **Docker:** Multi-stage build (node:20-alpine → nginx:1.25-alpine)
  - Local test: `docker build -t test . && docker run -p 8000:80 test`
  - Push to Hub: `docker push mortware/web:latest`
  - Deploy to ACA: Automatic via GitHub Actions or manual `az containerapp update`
- **GitHub Actions:** Workflow at .github/workflows/deploy-aca.yml
  - Builds image, pushes to Docker Hub (mortware/web)
  - Updates Azure Container App (app-mortware, rg-mortware)
  - Uses OIDC federated credentials for Azure auth

## Project Conventions
- **Storage:** Theme preference in localStorage key "mortware-theme" ("light", "dark", or remove for system mode).
- **Tailwind:** Content paths at index.html + src/**/*.{js,ts,jsx,tsx}; see tailwind.config.js.
- **Ports:** Vite dev server 3000, Docker container 80, local test 8000.
- **Resume Date Format:** YYYY-MM-DD in resume-data.ts; formatted as year only in display.
- **Images:** Profile photo at public/dp_profile.png (shows initials if missing).

## Container Configuration
- **Nginx:** Configured for SPA routing (try_files $uri /index.html) via nginx.conf.
- **Port:** Container listens on 80; Azure Container App ingress targets 80.
- **Environment:** No env vars required; data is baked into the build.

## Security
- No auth flows or external APIs.
- Avoid secrets in client code or localStorage.
- GitHub secrets (DOCKERHUB_USERNAME, AZURE_CLIENT_ID, etc.) are managed in repo Settings.
- Azure OIDC credentials in service principal for GitHub Actions.

## Testing Before Deployment
- Always build and test the Docker image locally before pushing:
  ```bash
  docker build --no-cache -t mortware/web:test .
  docker run --rm -d -p 8000:80 mortware/web:test
  curl http://localhost:8000  # Verify 200 response
  docker stop mortware/web:test
  ```

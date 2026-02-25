# Mortware

React + Vite + Tailwind web app with resume rendering, routing, and Azure Container Apps deployment.

## Features

- **Home page** at `/` with centered label and link to resume
- **Resume page** at `/resume` with work history, education, skills, and social links
- **Dark mode** toggle stored in localStorage
- **Print-friendly** resume layout
- **Docker** containerized and deployed to Azure Container Apps

## Development

```bash
npm install
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## Docker

```bash
# Build locally
docker build -t mortware/web:local .

# Test locally
docker run --rm -p 8000:80 mortware/web:local

# Access at http://localhost:8000
```

## Deployment

The app is deployed automatically to Azure Container Apps via GitHub Actions when you push to `main`:

1. GitHub Actions builds the Docker image
2. Pushes to Docker Hub (`mortware/web` repository)
3. Container App pulls and deploys the new image

**Manual deployment:**
```bash
docker build -t mortware/web:latest .
docker push mortware/web:latest
az containerapp update --name app-mortware --resource-group rg-mortware --image mortware/web:latest
```

**Container App ingress:** Port 80 (nginx)

## Project Structure

- `src/App.tsx` - Main router and app shell
- `src/main.tsx` - React entry point with BrowserRouter
- `src/resume/ResumePage.tsx` - Resume page component
- `src/resume/components/` - Resume sub-components (Header, History, Section)
- `src/resume/resume-data.ts` - Work history, education, skills
- `src/ThemeToggle.tsx` - Dark mode toggle
- `.github/workflows/deploy-aca.yml` - GitHub Actions CI/CD
- `Dockerfile` - Multi-stage build (Node.js → nginx)
- `nginx.conf` - SPA routing configuration

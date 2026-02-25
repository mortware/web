# Mortware

Minimal React + Vite + Tailwind site.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Container

Build and run locally:

```bash
docker build -t mortware .
docker run --rm -p 8080:80 mortware
```

For Azure Container Apps, set the target port to 80.

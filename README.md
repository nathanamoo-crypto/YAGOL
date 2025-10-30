# YAGOL (Frontend)

Simple static site built with HTML and Tailwind CSS.

## Quick Start

```bash
# Install deps
npm install

# Build CSS
npm run build

# Serve locally (pick one)
npx http-server . -p 5173 -c-1
# or
python -m http.server 8000
```

Open: `http://localhost:5173/index.html` (or `http://localhost:8000/index.html`).

## Develop

```bash
npm run watch
```
This rebuilds Tailwind on file changes.

## Files
- `index.html`, `about.html`, `contact.html`
- `src/css/input.css` → compiled to `dist/css/style.css`
- `assets/` (logos, favicon)

## Notes
- Favicon uses `assets/logo-full.png`.
- Colors: Fiery Red `#FF3737`, Gold `#FFD700` (+ accents for readability).

## License
© 2025 YAGOL. All rights reserved.


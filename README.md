# 🔥 YAGOL - The Fire Behind Every Goal; Your Ambition. Your Game. YAGOL.

A motivational brand website empowering athletes and dreamers worldwide to ignite their passion, push their limits, and stay loyal to their purpose.

## 🌟 About YAGOL

**YAGOL** represents the five core values that drive success:
- **Y**earn - The deep desire that sparks every journey
- **A**mbition - The drive to reach higher, dream bigger
- **G**rit - The unyielding determination to persist
- **O**vercome - Rising above every obstacle in your path
- **L**oyalty - Staying true to your purpose and community

### Origin

Born from the heart of Ghana, YAGOL is inspired by **Ogya** (Twi for "Fire") — representing the burning passion that drives us to achieve greatness against all odds.

**Founders:** Nathaniel Nana Yaw Kyereboah Amoo & Deladem Kodzo Avudzega

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **TailwindCSS v3** - Utility-first CSS framework
- **PostCSS + Autoprefixer** - CSS processing
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Montserrat, Lato, Poppins, Inter
- **AOS.js** - Animate On Scroll library
- **Heroicons** - Icon library

## 📁 Project Structure

```
yagol/
│
├── index.html          # Landing page
├── about.html          # About page with five pillars
├── contact.html        # Contact page with form
│
├── src/
│   ├── css/
│   │   └── input.css   # Tailwind source CSS
│   ├── js/
│   │   └── main.js     # JavaScript functionality
│
├── dist/
│   ├── css/
│   │   └── style.css   # Compiled Tailwind CSS
│
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Project dependencies
└── README.md          # This file
```

## 🎨 Design System

### Colors

- **Deep Fiery Red** (`#C1272D`) - Passion, energy, drive (Ogya flame)
- **Metallic Silver** (`#C0C0C0`) - Strength, endurance, balance
- **Gold Accents** (`#FFD700`) - Excellence, achievement
- **Deep Navy / Black** (`#0A0A0A`) - Discipline, depth, focus

### Typography

- **Primary:** Montserrat - Bold, geometric, modern (headlines & navigation)
- **Secondary:** Lato - Approachable, warm (paragraph text)
- **Fallback Fonts:** sans-serif
- **Alternative:** Poppins and Inter (if Montserrat/Lato not available)

### Logo Symbolism

- **Upward Arrow / Flame** - Ambition, progress, overcoming challenges
- **Flame (Ogya)** - Ghanaian fire - energy, perseverance, inner spark
- **Encircling Ring** - Unity, community, strength

## 🚀 Getting Started

### ⚠️ Important Note for Collaborators

**The compiled CSS file (`dist/css/style.css`) is NOT tracked in git.** You **MUST** build the CSS after cloning the repository, otherwise the website will appear completely unstyled (no colors, layout, or Tailwind styles).

### 🏃 Quick Start: Running Locally

**Step-by-step commands:**

```bash
# 1. Clone the repository
git clone https://github.com/nathanamoo-crypto/YAGOL.git
cd YAGOL

# 2. Install dependencies (Node.js required)
npm install

# 3. Build the CSS (REQUIRED - don't skip this!)
npm run build

# 4. Start a local server (choose one method below)
```

**Starting a Local Server (pick one):**

| Method | Command | URL |
|--------|---------|-----|
| **Python** | `python -m http.server 8000` | http://localhost:8000 |
| **Node.js** | `npx http-server` | http://localhost:8080 |
| **VS Code** | Install "Live Server" extension, right-click `index.html` → "Open with Live Server" | Auto-opens |
| **Direct open** | Double-click `index.html` | ⚠️ Some features may not work |

**That's it!** Open the URL in your browser to view the website.

### Prerequisites

- **Node.js** (v14 or higher) installed on your system
- **npm** (comes with Node.js)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nathanamoo-crypto/YAGOL.git
   cd YAGOL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This installs Tailwind CSS, PostCSS, and Autoprefixer.

3. **Build the CSS file (REQUIRED)**
   ```bash
   npm run build
   ```
   This compiles `src/css/input.css` into `dist/css/style.css`. **You must run this before viewing the site!**

4. **View the website**
   
   **Option A: Use a local server (Recommended)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # OR using Node.js http-server (install globally: npm install -g http-server)
   npx http-server
   ```
   Then navigate to `http://localhost:8000` in your browser.
   
   **Option B: Open directly in browser**
   - Simply open `index.html` in your browser (some features may not work perfectly due to CORS restrictions)

### Development Workflow

When making changes, use the watch command to auto-rebuild CSS:

```bash
npm run watch
```

This will automatically rebuild `dist/css/style.css` whenever you modify:
- HTML files
- Files in `src/css/`
- Files in `src/js/`

## 📝 Available Commands

- `npm run build` - Build Tailwind CSS once (compile `src/css/input.css` → `dist/css/style.css`)
- `npm run watch` - Watch for changes and rebuild automatically (use during development)

## 🔍 Troubleshooting

### The website looks unstyled (no colors, broken layout)

**Problem:** The CSS file hasn't been built yet.

**Solution:** Run `npm run build` to compile the Tailwind CSS. Make sure `dist/css/style.css` exists and contains CSS rules.

### CSS changes aren't appearing

**Problem:** The CSS wasn't rebuilt after making changes.

**Solution:** 
- Run `npm run build` to rebuild once, OR
- Run `npm run watch` to auto-rebuild on every change

### Styles work locally but not after git pull

**Problem:** After pulling new changes, the CSS needs to be rebuilt.

**Solution:** Always run `npm run build` after pulling from git, since the compiled CSS isn't tracked in the repository.

## ✨ Features

- ✨ Fully responsive design (mobile, tablet, desktop)
- 🎨 Custom Tailwind theme with YAGOL brand colors
- 🎬 AOS (Animate On Scroll) animations
- 📱 Mobile-friendly navigation menu
- 🔥 Motivational branding throughout
- 💫 Smooth scrolling navigation
- 📧 Contact form (frontend only)

## 🌐 Pages

### Home (`index.html`)
- Hero section with motivational messaging
- Five pillars preview
- About preview section
- Call-to-action sections

### About (`about.html`)
- Complete mission and vision statements
- Detailed explanation of five pillars
- Founders' story
- Brand origin and values

### Contact (`contact.html`)
- Contact form
- Social media links
- Contact information

## 🔧 Development

### Adding New Styles

Edit `src/css/input.css` and add custom utilities:

```css
@layer components {
  .custom-button {
    @apply bg-yagolRed text-white px-6 py-3 rounded-lg hover:bg-opacity-90;
  }
}
```

### Brand Colors in Tailwind

Use these custom color classes:
- `bg-yagolRed` / `text-yagolRed`
- `bg-yagolSilver` / `text-yagolSilver`
- `bg-yagolGold` / `text-yagolGold`
- `bg-yagolDark` / `text-yagolDark`

## 🤝 Contributing

This is the frontend phase of the YAGOL website. Future phases will include:
- Backend integration
- User authentication
- Content management system
- E-commerce features

## 📄 License

© 2025 YAGOL. The Fire Behind Every Goal; Your Ambition, Your Dream, YAGOL.

All rights reserved by Nathaniel Nana Yaw Kyereboah Amoo & Deladem Kodzo Avudzega.

## 🔗 Links

- Website: [Coming Soon]
- Social Media: [Coming Soon]

---

**Ignite your fire. Push your limits. Stay loyal to your purpose.** 🔥


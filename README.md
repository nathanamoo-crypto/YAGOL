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

### Prerequisites

- Node.js installed on your system
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nathanamoo-crypto/YAGOL.git
   cd YAGOL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build Tailwind CSS**
   ```bash
   npm run build
   ```

4. **Watch for changes (Development)**
   ```bash
   npm run watch
   ```

### Running the Project

1. Build the CSS file:
   ```bash
   npm run build
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## 📝 Available Commands

- `npm run build` - Build Tailwind CSS once
- `npm run watch` - Watch for changes and rebuild automatically

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

© 2025 YAGOL. The Fire Behind Every Goal.

All rights reserved by Nathaniel Nana Yaw Kyereboah Amoo & Deladem Kodzo Avudzega.

## 🔗 Links

- Website: [Coming Soon]
- Social Media: [Coming Soon]

---

**Ignite your fire. Push your limits. Stay loyal to your purpose.** 🔥


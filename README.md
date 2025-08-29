# 🖥️ Saswata Dutta - Terminal-Style Portfolio

> *"Building scalable systems by day, exploring AI by night"*

A sleek, terminal-inspired portfolio showcasing my journey from blockchain protocols to AI-driven solutions. Built with Next.js, TypeScript, and a passion for clean, interactive design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![React](https://img.shields.io/badge/React-19.1.0-blue)

## 🚀 Live Demo

**[View Portfolio](https://saztech.org)**

## 🎯 Why I Built This

As someone who's spent 3+ years scaling blockchain systems from zero to 14 million users, I wanted a portfolio that reflects my technical depth while showcasing my personality. This isn't just another portfolio - it's a statement about how I approach problems: with precision, creativity, and a touch of terminal nostalgia.

**The Goal:** Impress recruiters, land summer internships, and show that I can build both robust backend systems AND beautiful frontend experiences.

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Pure CSS
- **Animations:** Framer Motion
- **Particles:** tsparticles (interactive background)
- **Icons:** Lucide React
- **Deployment:** Vercel + Cloudflare (DNS, HTTPS, CDN)

## 🎨 Features

- **Interactive Particles** - Hover and click to see the magic
- **Terminal Aesthetic** - Green crosshair cursor, monospace fonts, terminal glow
- **Responsive Design** - Works on everything from mobile to ultrawide
- **Developer Easter Eggs** - Open the console and type `help()` 😉
- **Smooth Animations** - Framer Motion-powered transitions
- **SEO Optimized** - Meta tags, structured data, the works

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SD170/portfolio-2025.git
cd portfolio-2025

# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 🎮 Interactive Features

### Console Commands
Open your browser's developer console and try these commands:

```javascript
help()        // Show available commands
blockchain()  // Learn about my blockchain experience
ai()          // AI and education background
terminal()    // Terminal aesthetic info
```

### Particle Interactions
- **Hover** over particles to see grab effects
- **Click** to add new particles
- **Move** around to see dynamic connections

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Terminal theme & animations
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Main portfolio page
│   └── not-found.tsx        # 404 page
├── components/
│   ├── Navigation.tsx       # Fixed top navigation
│   └── ParticlesBackground.tsx  # Interactive particles
└── data/
    └── portfolio.ts         # All portfolio content
```

## 🎯 About Me

**Who I am:** A software engineer who joined Intract as the first hire and helped scale it from zero to 14 million users. Currently pursuing MS in Computer Science at Arizona State University.

**What I do:** Build scalable backend systems, design blockchain protocols, and explore AI-driven solutions. I've generated $590k in revenue through innovative blockchain solutions and published NPM packages with 200+ weekly downloads.

**Why this matters:** I'm not just another developer - I'm someone who can take a startup from 0 to millions of users, design complex protocols, and build products that actually make money.

## 🎨 Design Philosophy

This portfolio embodies my approach to engineering:

- **Precision:** Every pixel, every animation, every interaction is intentional
- **Performance:** 60fps animations, optimized builds, fast loading
- **Personality:** Terminal aesthetic reflects my love for clean, efficient systems
- **Professional:** Despite the terminal theme, it's still recruiter-friendly

## 🔧 Customization

### Colors
All colors are defined as CSS variables in `src/app/globals.css`:

```css
:root {
  --accent-green: #00ff41;
  --bg-primary: #0f0f0f;
  --text-primary: #ffffff;
  /* ... more variables */
}
```

### Content
Update `src/data/portfolio.ts` to customize:
- Personal information
- Experience details
- Project descriptions
- Skills and achievements

### Particles
Modify `src/components/ParticlesBackground.tsx` to adjust:
- Particle count and speed
- Interaction modes
- Colors and effects

## 🚀 Deployment

### Vercel + Cloudflare Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Configure Cloudflare
# 1. Add custom domain in Vercel dashboard
# 2. Update DNS records in Cloudflare
# 3. Enable HTTPS and CDN optimization
```

### Other Platforms
The project builds to static files, so it works on:
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

This is my personal portfolio, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Let's Connect

- **LinkedIn:** [Saswata Dutta](https://linkedin.com/in/sd170)
- **GitHub:** [@SD170](https://github.com/SD170)
- **Stack Overflow:** [47k+ reached](https://stackoverflow.com/users/11974952/saswata-dutta)
- **Email:** saswata.dutta@asu.edu

---

**Built with ❤️ and lots of terminal nostalgia**

*If you're a recruiter reading this: I've scaled systems to millions of users, generated $590k in revenue, and built products that actually work. Your next big thing? I can make it happen. Let's talk.*

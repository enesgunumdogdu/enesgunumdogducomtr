# Enes Gunumdogdu - Portfolio Website

A modern, responsive personal portfolio website built with React 19 and Material UI 7. Features dynamic GitHub integration, smooth animations, gradient effects, and a sleek dark theme design.

[![Live Demo](https://img.shields.io/badge/Live-enesgunumdogdu.com.tr-7c3aed?style=for-the-badge)](https://enesgunumdogdu.com.tr)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![MUI](https://img.shields.io/badge/MUI-7-007FFF?style=for-the-badge&logo=mui)](https://mui.com)

## Features

### Dynamic Content
- **GitHub Integration** - Automatically fetches and displays all public repositories via GitHub API
- **Smart Categorization** - Repos are auto-categorized (Backend, Web, AI/ML, Mobile, DevOps, Tools)
- **Multi-Filter System** - Filter repositories by category and programming language simultaneously
- **Real-time Updates** - New repositories appear automatically on page load

### User Interface
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dark Theme** - Modern dark UI with purple/pink gradient accents
- **Glass Morphism** - Frosted glass effect on cards and containers
- **Smooth Animations** - Page transitions, hover effects, and micro-interactions

### Interactive Elements
- **TypeWriter Effect** - Animated role titles on homepage
- **Rive Animations** - Cute animated character on 404 page
- **Floating Orbs** - Animated background elements
- **Gradient Text** - Animated shimmer effects on headings

### Contact & Security
- **Netlify Forms** - Server-side form handling without backend
- **reCAPTCHA v2** - Bot protection on contact form
- **Honeypot Field** - Additional spam protection layer

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, Material UI 7, Emotion |
| **Build Tool** | Vite 7 |
| **Routing** | React Router 7 |
| **Animations** | Rive, CSS Animations |
| **Forms** | Netlify Forms, react-google-recaptcha |
| **Hosting** | Netlify |
| **API** | GitHub REST API |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with mobile hamburger menu
│   ├── Footer.jsx          # Site footer with links
│   ├── TypeWriter.jsx      # Typing animation component
│   └── ScrollToTop.jsx     # Scroll restoration on navigation
├── hooks/
│   └── useDocumentTitle.js # Dynamic page title management
├── pages/
│   ├── Home.jsx            # Landing page with hero, features, stats
│   ├── About.jsx           # Bio, skills, experience, education
│   ├── Projects.jsx        # Featured projects + GitHub repos
│   ├── Contact.jsx         # Contact form and social links
│   └── NotFound.jsx        # 404 page with Rive animation
├── App.jsx                 # Main app with routing
├── App.css                 # Component styles
├── index.css               # CSS variables and utilities
└── main.jsx                # React entry point

public/
├── logos/                  # Company logos for experience section
├── favicon.svg             # Site favicon
└── _redirects              # Netlify SPA routing
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/enesgunumdogdu/enesgunumdogdu.com.tr.git
   cd enesgunumdogdu.com.tr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your reCAPTCHA site key:
   ```
   VITE_RECAPTCHA_SITE_KEY=your_site_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:5173](http://localhost:5173)**

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

### Netlify (Recommended)

This project is pre-configured for Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify auto-detects settings from `netlify.toml`
4. Add environment variable `VITE_RECAPTCHA_SITE_KEY` in Netlify dashboard
5. Enable form detection for contact form

### Other Platforms

Build the project and deploy the `dist/` folder:

```bash
npm run build
```

## Customization

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --purple-700: #7c3aed;
  --pink-500: #ec4899;
  --bg-primary: #050505;
  --bg-secondary: #111111;
}
```

### Content

| Section | File |
|---------|------|
| Personal info | `src/pages/Home.jsx`, `src/pages/About.jsx` |
| Featured projects | `src/pages/Projects.jsx` → `featuredProjects` array |
| Work experience | `src/pages/About.jsx` → `experiences` array |
| Skills | `src/pages/About.jsx` → `skillCategories` array |
| Social links | `src/pages/Contact.jsx` → `socialLinks` array |

### GitHub Username

To display your own repositories, update the API URL in `src/pages/Projects.jsx`:

```javascript
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?per_page=100&sort=updated')
```

## API Rate Limits

The GitHub API has rate limits for unauthenticated requests:
- **60 requests/hour** per IP address
- For higher limits, consider implementing GitHub OAuth or using a personal access token

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

## Author

**Enes Gunumdogdu**

- Website: [enesgunumdogdu.com.tr](https://enesgunumdogdu.com.tr)
- GitHub: [@enesgunumdogdu](https://github.com/enesgunumdogdu)
- LinkedIn: [enesgunumdogdu](https://www.linkedin.com/in/enesgunumdogdu/)

---

If you found this project helpful, consider giving it a star!

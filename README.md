# Enes Gunumdogdu - Portfolio Website

A modern, responsive personal portfolio website built with React and Material UI, featuring smooth animations, gradient effects, and a clean dark theme design.

## Live Demo

[enesgunumdogdu.com.tr](https://enesgunumdogdu.com.tr)

## Tech Stack

- **React 19** - Frontend library
- **Vite 7** - Build tool and dev server
- **Material UI 7** - Component library
- **React Router 7** - Client-side routing
- **Netlify** - Hosting and form handling

## Features

- Fully responsive design (mobile, tablet, desktop)
- Animated gradient text effects
- Smooth page transitions
- TypeWriter effect on homepage
- Contact form with Netlify Forms integration
- Custom scrollbar styling
- Glass morphism UI elements
- Floating background orbs animation

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation with mobile menu
│   ├── Footer.jsx      # Site footer
│   └── TypeWriter.jsx  # Typing animation component
├── hooks/
│   └── useDocumentTitle.js  # Dynamic page titles
├── pages/
│   ├── Home.jsx        # Landing page with hero section
│   ├── About.jsx       # About, skills, and experience
│   ├── Projects.jsx    # Portfolio projects showcase
│   └── Contact.jsx     # Contact form and social links
├── App.jsx             # Main app with routing
├── App.css             # Global component styles
├── index.css           # CSS variables and utilities
└── main.jsx            # React entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/enesgunumdogdu/enesgunumdogdu.com.tr.git
cd enesgunumdogdu.com.tr
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

This project is configured for Netlify deployment:

- `netlify.toml` - Build configuration and redirects
- `public/_redirects` - SPA routing support
- Contact form uses Netlify Forms (no backend required)

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will auto-detect the build settings from `netlify.toml`
4. Enable form detection in Netlify dashboard

## Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --purple-700: #7c3aed;
  --pink-500: #ec4899;
  --bg-primary: #050505;
  /* ... more variables */
}
```

### Content

- **Personal info**: Edit `src/pages/Home.jsx` and `src/pages/About.jsx`
- **Projects**: Update the `projects` array in `src/pages/Projects.jsx`
- **Experience**: Modify the `experiences` array in `src/pages/About.jsx`
- **Social links**: Update links in `src/pages/Contact.jsx`

## License

MIT License - feel free to use this template for your own portfolio.

## Author

**Enes Gunumdogdu**
- Website: [enesgunumdogdu.com.tr](https://enesgunumdogdu.com.tr)
- GitHub: [@enesgunumdogdu](https://github.com/enesgunumdogdu)
- LinkedIn: [enesgunumdogdu](https://www.linkedin.com/in/enesgunumdogdu/)

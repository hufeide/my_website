# Portfolio Website

A bold, modern portfolio website built with vanilla HTML5, CSS3, and JavaScript.

## Quick Start

Navigate to the worktree and open `index.html` in your browser, or run a local server:

```bash
cd .worktrees/portfolio
python -m http.server 8000
# or
npx serve .
```

Visit http://localhost:8000

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ Smooth scroll navigation
- ✅ Mobile menu toggle
- ✅ Contact form with validation
- ✅ Scroll animations
- ✅ Dark mode with bold accents
- ✅ Semantic HTML5 structure
- ✅ Accessible and keyboard-friendly

## Project Structure

```
portfolio/
├── index.html          # Main portfolio page
├── css/
│   └── styles.css      # All styling with CSS variables
├── js/
│   └── script.js       # All JavaScript functionality
├── projects/           # Project showcase pages
│   ├── project-alpha.html
│   ├── project-beta.html
│   └── project-gamma.html
└── assets/             # Images and icons
    └── images/
        ├── project-alpha-placeholder.svg
        ├── project-beta-placeholder.svg
        └── project-gamma-placeholder.svg
```

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-accent: #ff6b35;
    --color-bg: #0a0a0a;
    --color-text-primary: #ffffff;
    /* ... more variables */
}
```

### Content

Edit `index.html` to customize:
- Hero section text and buttons
- Story content
- Project cards
- Skills and progress bars
- Contact form

### Projects

Replace placeholder project pages in the `projects/` folder with your actual project showcases.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this template for your own portfolio.
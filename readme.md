# Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and contact information. Features a unique flipbook-style project viewer and clean, professional design.

## 🌟 Features

- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Interactive Flipbook**: Unique project showcase using Turn.js library
- **Smooth Animations**: CSS animations for enhanced user experience
- **Dynamic Navigation**: Auto-hiding navbar on scroll
- **Technology Showcase**: Visual grid of technologies and tools I work with
- **Contact Section**: Multiple ways to get in touch

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables and flexbox/grid layouts
- **JavaScript**: Interactive functionality and DOM manipulation
- **jQuery**: For enhanced DOM manipulation and animations
- **Turn.js**: Flipbook functionality for project showcase

## 📁 Project Structure

```
├── index.html              # Main portfolio page
├── book.html               # Standalone flipbook demo
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── book.css            # Flipbook-specific styles
│   ├── animation.css       # Animation definitions
│   └── normalize.css       # CSS reset/normalize
├── javascript/
│   ├── index.js            # Main JavaScript functionality
│   ├── jquery.js           # jQuery library
│   ├── turn.js             # Flipbook library
│   └── scrollspy.js        # Scroll tracking functionality
├── media/
│   ├── logos/              # Technology logos
│   ├── contactIcon/        # Contact method icons
│   ├── nav/                # Navigation icons
│   └── ProjectScreenshot/  # Project preview images
└── ProjectsPages/
    └── Chimken.html        # Individual project pages
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 600px and below
- **Small Mobile**: 400px and below

## 🎨 Key Sections

### Hero Section
- Personal introduction
- Call-to-action buttons
- Fade-in animation on scroll

### About/Technologies
- Grid layout of technologies I work with
- Hover effects and responsive design
- Logos and descriptions for each technology

### Projects (Flipbook)
- Interactive flipbook showcasing projects
- Clickable project images
- Project descriptions and details
- Responsive sizing for different screen sizes

### Contact
- Multiple contact methods (Email, GitHub, LinkedIn, Phone)
- Social media links
- Professional contact information

## 🔧 Customization

### CSS Variables
The project uses CSS custom properties for easy theming:

```css
:root {
  --primary-bg-color: #your-color;
  --secondary-bg-color: #your-color;
  --text-color: #your-color;
  --accent-color: #your-color;
  --border-color: #your-color;
}
```

### Adding New Projects
1. Add project images to `media/ProjectScreenshot/`
2. Create project page in `ProjectsPages/`
3. Update the flipbook content in `index.html`

## 📞 Contact

- **Email**: machacka.petr1@gmail.com
- **GitHub**: [PetrMachacka](https://github.com/PetrMachacka)
- **LinkedIn**: [Petr Machačka](https://www.linkedin.com/in/petr-machačka-95a83428b)

---

Built with ❤️ by Petr Machačka
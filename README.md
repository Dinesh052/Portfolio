# Portfolio Website - Dinesh Guduru

A modern, responsive portfolio website built with React and designed with a crumpled paper aesthetic and Notion-like typography. The website showcases my professional experience, projects, and achievements in an elegant, paper-themed interface.

## 🎨 Design Features

- **Crumpled Paper Theme**: Subtle paper-like textures and shadows throughout the interface
- **Notion-inspired Typography**: Clean, readable fonts using Inter typeface
- **Minimal Color Palette**: Black and white theme with subtle gray accents
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Responsive Design**: Optimized for all screen sizes and devices

## 🚀 Tech Stack

- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing for multi-page navigation
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, consistent icons
- **CSS Variables** - Maintainable theming system

## 📱 Pages

- **Home**: Hero section with introduction and key highlights
- **About**: Personal background, education, and skills
- **Experience**: Work experience, internships, and publications
- **Projects**: Detailed showcase of key projects and achievements
- **Contact**: Contact information and professional links

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navigation.jsx   # Main navigation component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page
│   ├── Experience.jsx  # Experience page
│   ├── Projects.jsx    # Projects showcase
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component with routing
├── index.css           # Global styles and theme variables
└── main.jsx           # App entry point
```

## 🎯 Key Features

- **Paper-like UI Elements**: Cards with subtle shadows and crumpled effects
- **Interactive Animations**: Hover effects and smooth page transitions
- **Mobile-First Design**: Responsive layout that works on all devices
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **GitHub Pages Ready**: Pre-configured for easy deployment
- **Performance Optimized**: Fast loading with Vite's build optimization

## 🚀 Deployment

This portfolio is configured for deployment on GitHub Pages. To deploy:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Update the `base` field in `vite.config.js` with your repository name
3. Run `npm run deploy` to build and deploy to GitHub Pages

## 📄 Content

The portfolio contains information about:
- Professional experience at Walmart Global Tech and other organizations
- Academic achievements including Smart India Hackathon winner
- Research publications in IEEE conferences
- Key projects including drone-based SAR systems and enterprise architecture
- Technical skills in software development, AI/ML, and cloud technologies

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio needs. The design system is modular and easy to modify.

Built using React and modern web technologies.

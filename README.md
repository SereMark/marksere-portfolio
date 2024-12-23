# marksere.com - Professional Portfolio

Welcome to the repository for **marksere.com**, a modern, sleek, and professional portfolio website to showcase expertise in AI, robotics, and software development. Designed for scalability, performance, and a premium user experience, this portfolio emphasizes minimalistic aesthetics, smooth animations, and interactivity.

---

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

---

## **Features**

- **Hero Section**: Full-screen landing page with animated intro text, a parallax background, and a clear call-to-action.
- **Interactive Project Showcase**: Filterable grid layout, hover effects, and detailed project modals with live demo and GitHub links.
- **Scroll-Triggered Animations**: Smooth fade-ins, zoom effects, and parallax scrolling powered by GSAP and Framer Motion.
- **Dynamic Cursor**: Custom animated cursor for a modern touch.
- **Dark Mode**: Light/dark theme toggle with smooth transitions and user preference persistence.
- **Contact Section**: Minimalistic form with Netlify Forms integration and direct links to GitHub, LinkedIn, and email.
- **Performance Optimizations**: Lazy loading, WebP images, tree shaking, and responsive design.

---

## **Technologies Used**

### **Frontend**
- **React.js**: Component-based UI development.
- **Vite**: Fast development build tool with static site generation.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Framer Motion**: Smooth animations and page transitions.
- **GSAP (GreenSock Animation Platform)**: Advanced animations and scroll-triggered effects.
- **Locomotive Scroll**: Smooth scrolling with parallax effects.
- **Three.js** *(optional)*: Interactive 3D graphics.

### **Hosting**
- **Netlify**: Continuous deployment, global CDN delivery, and automatic HTTPS.

### **Design**
- **Google Fonts**: Clean, professional typography.
- **Feather Icons**: Lightweight, modern icons.

### **Optimization**
- Lazy loading, WebP image formats, tree shaking, and responsive utilities.

---

## **Project Structure**

```
marksere.com/
├── public/                 # Static assets (images, favicon, etc.)
├── src/                    # Main source code
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components
│   ├── styles/             # Tailwind and SCSS styles
│   ├── animations/         # Framer Motion and GSAP animation configurations
│   └── utils/              # Helper functions and configurations
├── .gitignore              # Ignored files and directories
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
├── package.json            # Project metadata and dependencies
├── LICENSE                 # Licensing information
└── README.md               # Project documentation
```

---

## **Setup and Installation**

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn
- Git

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/marksere.com.git
   cd marksere.com
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

---

## **Development Workflow**

### **Start Development Server**
Start the local development server:
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser to view the project.

### **Build for Production**
To create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` folder.

### **Linting and Formatting**
Run linting:
```bash
npm run lint
```
Format code:
```bash
npm run format
```

---

## **Deployment**

The site is automatically deployed to **Netlify** via continuous deployment from the `main` branch. To manually deploy:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder to Netlify.

---

## **License**

This project is dual-licensed:
- **Code**: [MIT License](./LICENSE)
- **Creative Assets**: Licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

For more details, refer to the [LICENSE](./LICENSE) file.

---

## **Contact**

**Sere Gergő Márk**  
- **Website**: [marksere.com](https://marksere.com)  
- **GitHub**: [github.com/SereMark](https://github.com/SereMark)  
- **LinkedIn**: [linkedin.com/in/seremark](https://linkedin.com/in/seremark)  
- **Email**: [seremark056@gmail.com](mailto:seremark056@gmail.com)

Feel free to reach out with questions, suggestions, or collaboration ideas!

# React Portfolio Website

A responsive, multi-page portfolio website built with **React + Vite**, **Bootstrap**, and **React Router**. Features client-side routing, reusable components, and a modern design perfect for showcasing your work.

## 🎯 Features

- **Multi-page routing** with React Router DOM (Home, About, Portfolio, Contact)
- **Responsive design** using Bootstrap 5 + React-Bootstrap
- **Modular components** for easy customization
- **Font Awesome icons** for enhanced UI
- **Fast development** with Vite HMR
- **Production-ready** build configuration

## 📁 Project Structure

```
src/
├── Components/
│   ├── About/         # About section
│   ├── Contact/       # Contact form/links
│   ├── Footer/        # Footer component
│   ├── Home/          # Hero/landing section
│   ├── Layout/        # Main layout wrapper with navigation
│   ├── Navbar/        # Navigation component
│   └── Portfolio/     # Project showcase
├── App.jsx            # Router configuration
├── App.css
├── index.css
└── main.jsx           # React entry point
```

## 🚀 Quick Start

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```bash
npm run build
```

Deploy the `dist/` folder to your hosting (Vercel, Netlify, GitHub Pages).

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Fast build tool & dev server
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - CSS framework
- **React-Bootstrap** - Bootstrap components for React
- **Font Awesome** - Icon library
- **ESLint** - Code linting

## 📝 Customize

1. **Update your information** in each component under `src/Components/`
2. **Add projects** to `src/Components/Portfolio/Portfolio.jsx`
3. **Modify colors/styles** in `src/App.css` or override Bootstrap classes
4. **Replace images** in `src/assets/imgs/`

## 🌐 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Vercel auto-deploys on push

### Netlify
1. Run `npm run build`
2. Deploy the `dist/` folder to Netlify

### GitHub Pages
Configure `vite.config.js` and use GitHub Actions or `gh-pages` package.

## 📞 Contact & Support

Reach out through the Contact section in the deployed site.

---

**Ready to showcase your work?** Clone, customize, and deploy! 🚀

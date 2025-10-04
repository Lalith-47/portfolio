# Lalith's Portfolio

A modern, glassmorphism-style portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases the work and skills of Lalith, a passionate Computer Science and Engineering student.

🚀 **[View Live Demo](https://lalith-portfolio.azurestaticapps.net)** (Coming Soon) | 📖 **[Setup Guide](SETUP_GUIDE.md)** | 🐛 **[Report Issue](https://github.com/Lalith-47/portfolio/issues)**

## 🌟 Features

- **Glassmorphism Design**: Beautiful frosted glass effects with subtle gradients and glowing elements
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Terminal Interface**: Interactive terminal-style "About" section with typewriter animations
- **Particle Background**: Dynamic particle system for visual appeal
- **SEO Optimized**: Complete meta tags, OpenGraph, and Twitter Card support
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized for Core Web Vitals and Lighthouse scores

## 🚀 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons + Simple Icons)
- **Forms**: React Hook Form
- **Particles**: React TSParticles
- **Deployment**: Microsoft Azure Static Web Apps

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Lalith-47/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/sections/Hero.tsx`):

   - Update name, description, and social links
   - Replace resume link in the CTA buttons

2. **About Section** (`src/components/sections/About.tsx`):

   - Modify terminal commands and outputs
   - Update personal story and interests

3. **Skills Section** (`src/components/sections/Skills.tsx`):

   - Add/remove skills and technologies
   - Update learning journey timeline

4. **Projects Section** (`src/components/sections/Projects.tsx`):

   - Replace with your actual projects
   - Update GitHub and live demo links

5. **Contact Section** (`src/components/sections/Contact.tsx`):
   - Update contact information and social links
   - Configure Web3Forms access key (see SETUP_GUIDE.md)

### Styling and Theme

- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update font imports in `src/styles/globals.css`
- **Glassmorphism**: Adjust glass effects in the CSS utilities

### Meta Tags and SEO

Update the following for SEO:

1. **Page metadata** in `src/pages/index.tsx`
2. **OpenGraph image** in `public/og-image.png`
3. **Favicon** in `public/favicon.ico`
4. **Manifest** in `public/manifest.json`

## ☁️ Deployment on Azure Static Web Apps

### Prerequisites

- Azure account
- GitHub repository

### Steps

1. **Create an Azure Static Web App**:

   - Go to Azure Portal
   - Create a new Static Web App resource
   - Connect to your GitHub repository
   - Set build details:
     - App location: `/`
     - Output location: `out`

2. **Configure GitHub Actions**:

   - The workflow file is already included at `.github/workflows/azure-static-web-apps.yml`
   - Update the `azure_static_web_apps_api_token` secret name with your actual token

3. **Environment Variables** (if needed):

   - Add any required environment variables in the Azure portal
   - For form submissions, configure Azure Functions or third-party services

4. **Custom Domain** (optional):
   - Configure custom domain in Azure Static Web Apps settings
   - Update CNAME records with your DNS provider

### Build Configuration

The project is configured for static export with the following settings in `next.config.js`:

```javascript
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

## 📱 Progressive Web App (PWA)

The portfolio includes PWA capabilities:

- **Manifest**: `public/manifest.json`
- **Icons**: Add PWA icons to the `public` folder
- **Service Worker**: Can be added for offline functionality

## 🛠️ Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Export static files
npm run export
```

## 📊 Performance

The portfolio is optimized for:

- **Core Web Vitals**: LCP, FID, CLS scores
- **Lighthouse**: 90+ scores across all categories
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Image Optimization**: Responsive images with proper loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Glassmorphism design trend
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Hosting**: [Microsoft Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/)

## 📞 Contact

**Lalith** - [GitHub](https://github.com/Lalith-47/) - [LinkedIn](https://www.linkedin.com/in/lalithkumarm143/) - [Email](mailto:Lalith22p3347@gmail.com)

Project Link: [https://github.com/Lalith-47/portfolio](https://github.com/Lalith-47/portfolio)  
Live Demo: [https://lalith-portfolio.azurestaticapps.net](https://lalith-portfolio.azurestaticapps.net) (Coming Soon)

---

**Built with 💙 and hosted on Microsoft Azure**

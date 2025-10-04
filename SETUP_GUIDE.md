# 🚀 Portfolio Setup Guide

Complete guide to get your portfolio production-ready and deployed on Microsoft Azure.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Form Backend Setup (Web3Forms)](#form-backend-setup)
4. [Resume Setup](#resume-setup)
5. [Azure Deployment](#azure-deployment)
6. [Post-Deployment](#post-deployment)
7. [Troubleshooting](#troubleshooting)

---

## ✅ Prerequisites

- [x] Node.js 18+ installed
- [x] Git installed and configured
- [x] GitHub account
- [x] Microsoft Azure account (free tier available)
- [ ] Resume PDF ready
- [ ] Web3Forms account (free)

---

## 🔧 Initial Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository (if not already done)
git clone https://github.com/Lalith-47/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio locally.

---

## 📧 Form Backend Setup (Web3Forms)

### Why Web3Forms?

- ✅ **Free**: 250 submissions/month
- ✅ **No server required**: Fully serverless
- ✅ **Easy setup**: Just an API key
- ✅ **Spam protection**: Built-in honeypot
- ✅ **Email notifications**: Receive submissions via email

### Setup Steps:

1. **Sign up for Web3Forms**

   - Go to: https://web3forms.com/
   - Click "Get Started for Free"
   - Sign up with your email (Lalith22p3347@gmail.com)

2. **Get Your Access Key**

   - After login, you'll see your dashboard
   - Click "Create New Form"
   - Enter form name: "Portfolio Contact Form"
   - Your access key will be generated (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

3. **Add Access Key to Code**

   - Open: `src/components/sections/Contact.tsx`
   - Find line 89: `access_key: "YOUR_WEB3FORMS_ACCESS_KEY"`
   - Replace with your actual key: `access_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"`

4. **Test the Form**

   ```bash
   npm run dev
   ```

   - Navigate to Contact section
   - Fill out and submit the form
   - Check your email (Lalith22p3347@gmail.com) for the submission

5. **Verify Email Delivery**
   - You should receive an email with the form submission
   - If not, check spam folder and Web3Forms dashboard

### Alternative Options:

If you prefer different services:

**Option A: Formspree**

- Website: https://formspree.io/
- Free tier: 50 submissions/month
- Setup: Similar to Web3Forms

**Option B: EmailJS**

- Website: https://www.emailjs.com/
- Free tier: 200 emails/month
- Setup: Requires template configuration

**Option C: Custom API**

- Create Next.js API route in `pages/api/contact.ts`
- Use Nodemailer or SendGrid
- Requires environment variables

---

## 📄 Resume Setup

### Quick Setup:

1. **Prepare Your Resume**

   - Format: PDF only
   - File size: Under 1MB recommended
   - Name: Can be anything initially
   - Content: Professional, up-to-date, error-free

2. **Add to Portfolio**

   ```bash
   # Copy your resume to the public folder
   cp /path/to/your/resume.pdf public/resume.pdf
   ```

3. **Verify**

   ```bash
   # Check if file exists
   ls public/resume.pdf

   # Start dev server
   npm run dev

   # Click "Resume" button in Hero section
   # It should download your PDF
   ```

### Current Behavior:

✅ **Resume exists**: Button downloads PDF  
❌ **Resume missing**: Button shows friendly message and directs to contact form

### Resume Tips:

- **Format**: Single page preferred, 2 pages maximum
- **Sections to Include**:
  - Contact Information (Name, Email, LinkedIn, GitHub)
  - Education (Your CSE degree)
  - Skills (Web Dev, Linux, Azure, etc.)
  - Projects (Your best 3-4 projects)
  - Experience (Internships, contributions)
- **Tools**: Use Canva, Overleaf (LaTeX), or Google Docs
- **Template**: Professional, clean, ATS-friendly

---

## ☁️ Azure Deployment

### Method 1: GitHub Actions (Recommended)

1. **Create Azure Static Web App**

   - Go to: https://portal.azure.com
   - Click "Create a resource"
   - Search "Static Web Apps"
   - Click "Create"

2. **Configure Static Web App**

   ```
   Subscription: Your Azure subscription
   Resource Group: Create new "portfolio-rg"
   Name: lalith-portfolio
   Plan Type: Free
   Region: Choose closest (e.g., East US)

   Deployment Details:
   Source: GitHub
   Organization: Lalith-47
   Repository: portfolio
   Branch: main

   Build Details:
   Build Presets: Next.js
   App location: /
   Api location: (leave empty)
   Output location: out
   ```

3. **Click "Review + Create"**

   - Azure will create the resource
   - GitHub Actions workflow will be automatically added
   - First deployment starts immediately

4. **Monitor Deployment**

   - Go to your GitHub repository
   - Click "Actions" tab
   - Watch the deployment progress
   - First build takes 5-10 minutes

5. **Get Your URL**
   - Once deployed, go to Azure Portal
   - Open your Static Web App resource
   - Find URL (format: `https://lalith-portfolio.azurestaticapps.net`)
   - Visit URL to see your live portfolio! 🎉

### Method 2: Azure CLI

```bash
# Install Azure CLI
# Windows: Download from https://aka.ms/installazurecliwindows

# Login to Azure
az login

# Create Static Web App
az staticwebapp create \
  --name lalith-portfolio \
  --resource-group portfolio-rg \
  --source https://github.com/Lalith-47/portfolio \
  --location "eastus" \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --login-with-github
```

### Method 3: VS Code Extension

1. Install "Azure Static Web Apps" extension
2. Click Azure icon in sidebar
3. Click "+" to create new Static Web App
4. Follow prompts

---

## 🎯 Post-Deployment

### 1. Custom Domain (Optional)

```bash
# In Azure Portal > Static Web App > Custom domains
# Add your custom domain (e.g., lalith.dev)
# Follow DNS configuration instructions
```

### 2. Environment Variables

If you need to add secrets:

```bash
# In Azure Portal > Static Web App > Configuration
# Add application settings
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
```

### 3. Update Links

Update these URLs in your code:

- `package.json` → `homepage` field
- `src/pages/index.tsx` → `siteConfig.url`
- `README.md` → Live demo link

### 4. SEO Checklist

- [ ] Add `robots.txt` to public folder
- [ ] Add `sitemap.xml` to public folder
- [ ] Update OpenGraph image (`public/og-image.png`)
- [ ] Test with: https://cards-dev.twitter.com/validator
- [ ] Submit to Google Search Console

### 5. Performance Testing

```bash
# Test with Lighthouse
# In Chrome DevTools > Lighthouse > Generate Report

# Goals:
# Performance: 90+
# Accessibility: 90+
# Best Practices: 90+
# SEO: 90+
```

---

## 🐛 Troubleshooting

### Build Failures

**Issue**: Build fails in GitHub Actions  
**Solution**:

```bash
# Test build locally first
npm run build

# Check for errors
# Fix any TypeScript or build errors
# Push fixes to GitHub
```

**Issue**: "Module not found" errors  
**Solution**:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Form Submission Issues

**Issue**: Form doesn't submit  
**Solution**:

1. Check browser console for errors
2. Verify Web3Forms access key is correct
3. Test network connectivity
4. Check Web3Forms dashboard for quota

**Issue**: Emails not received  
**Solution**:

1. Check spam folder
2. Verify email in Web3Forms settings
3. Check Web3Forms dashboard logs
4. Try submitting test form on Web3Forms website

### Resume Download Issues

**Issue**: Resume button doesn't work  
**Solution**:

1. Verify `public/resume.pdf` exists
2. Check file permissions
3. Test locally: `http://localhost:3000/resume.pdf`
4. After deployment: `https://your-url.azurestaticapps.net/resume.pdf`

### Azure Deployment Issues

**Issue**: Site not updating after push  
**Solution**:

1. Check GitHub Actions status
2. Verify workflow completed successfully
3. Clear browser cache (Ctrl+Shift+R)
4. Wait 2-3 minutes for CDN propagation

**Issue**: 404 errors on refresh  
**Solution**:

- This is normal for static export
- Azure handles it automatically
- Verify `staticwebapp.config.json` exists

---

## 🎓 Quick Reference

### Important Files

```
portfolio/
├── public/
│   ├── resume.pdf              ← Add your resume here
│   ├── favicon.ico             ← Update with your icon
│   └── og-image.png            ← Social media preview image
├── src/
│   ├── components/
│   │   └── sections/
│   │       └── Contact.tsx     ← Update Web3Forms key here
│   └── pages/
│       └── index.tsx           ← Update site URL here
├── .github/workflows/          ← Azure deployment workflow
├── package.json                ← Project metadata
└── next.config.js             ← Next.js configuration
```

### Essential Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check for code issues

git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push origin main # Deploy to Azure (auto)
```

### Important URLs

- **GitHub Repo**: https://github.com/Lalith-47/portfolio
- **Web3Forms**: https://web3forms.com/
- **Azure Portal**: https://portal.azure.com
- **Local Dev**: http://localhost:3000

---

## ✅ Final Checklist

Before going live:

- [ ] Web3Forms access key added
- [ ] Resume PDF added to `public/` folder
- [ ] All placeholder content updated
- [ ] Tested locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Committed and pushed to GitHub
- [ ] Azure deployment successful
- [ ] Live site tested thoroughly
- [ ] Contact form tested (sends email)
- [ ] Resume downloads correctly
- [ ] All links work (GitHub, LinkedIn, Email)
- [ ] Mobile responsive checked
- [ ] Lighthouse score > 90 (all metrics)

---

## 🎉 You're Ready!

Your portfolio is now production-ready! Here's what you've accomplished:

✅ Modern, glassmorphism portfolio website  
✅ Fully responsive design  
✅ Working contact form with email notifications  
✅ Resume download functionality  
✅ Deployed on Microsoft Azure  
✅ CI/CD with GitHub Actions  
✅ SEO optimized  
✅ Accessibility compliant  
✅ Professional social links

### Next Steps:

1. Complete Web3Forms setup (5 minutes)
2. Add your resume PDF (2 minutes)
3. Deploy to Azure (10 minutes)
4. Share your portfolio URL! 🚀

**Need help?** Check the Troubleshooting section or reach out!

---

**Made with 💙 by Lalith**  
_Hosted on Microsoft Azure Static Web Apps_

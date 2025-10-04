# 🚀 Deployment Checklist

Use this checklist to ensure your portfolio is 100% ready for production deployment.

## ✅ Pre-Deployment Tasks

### 1. Content & Personalization

- [x] ✅ Email address updated (`Lalith22p3347@gmail.com`)
- [x] ✅ GitHub profile linked (`https://github.com/Lalith-47/`)
- [x] ✅ LinkedIn profile linked (`https://www.linkedin.com/in/lalithkumarm143/`)
- [ ] ⏳ Resume PDF added to `public/resume.pdf`
- [ ] ⏳ Web3Forms access key configured in `Contact.tsx`
- [ ] ⏳ Replace placeholder project links with real projects
- [ ] ⏳ Update OpenGraph image (`public/og-image.png`) with custom design
- [ ] ⏳ Customize favicon (`public/favicon.ico`)

### 2. Form Backend Setup

**Option: Web3Forms (Recommended - Free)**

- [ ] Sign up at https://web3forms.com/
- [ ] Get your access key
- [ ] Update `src/components/sections/Contact.tsx` line 89
- [ ] Test form submission locally
- [ ] Verify email delivery to `Lalith22p3347@gmail.com`

**Alternative: Other Services**

- [ ] Formspree: https://formspree.io/
- [ ] EmailJS: https://www.emailjs.com/
- [ ] Custom API endpoint

### 3. Code Quality

- [ ] Run `npm run lint` - No errors
- [ ] Run `npm run build` - Successful build
- [ ] Test all pages locally (`npm run dev`)
- [ ] Check browser console - No errors
- [ ] Test all interactive elements
- [ ] Verify all animations work smoothly

### 4. Content Review

**Hero Section:**

- [x] ✅ Name and title correct
- [x] ✅ Social links working
- [x] ✅ Resume button has fallback handling
- [x] ✅ "Get In Touch" scrolls to contact

**About Section:**

- [ ] Terminal commands are relevant
- [ ] Personal story is accurate
- [ ] Timeline reflects your journey
- [ ] No placeholder text remains

**Skills Section:**

- [ ] All skills listed are accurate
- [ ] Remove skills you don't actually have
- [ ] Add any missing technologies
- [ ] Timeline dates are correct

**Projects Section:**

- [ ] Replace placeholder projects with real ones
- [ ] All GitHub links work
- [ ] Live demo links work (or remove if not deployed)
- [ ] Project descriptions are accurate
- [ ] Technologies listed match actual projects

**Contact Section:**

- [x] ✅ Email is correct
- [x] ✅ Social links work
- [ ] Form submission works
- [ ] Location is correct
- [ ] All icons display properly

### 5. SEO & Meta Tags

**Files to verify:**

- [ ] `public/robots.txt` - Update URL if using custom domain
- [ ] `public/sitemap.xml` - Update URLs if using custom domain
- [ ] `src/pages/index.tsx` - All meta tags accurate
- [ ] `public/manifest.json` - Update name and icons
- [ ] OpenGraph image exists and looks good

**Social Media Preview:**

- [ ] Test Twitter Card: https://cards-dev.twitter.com/validator
- [ ] Test Facebook preview: https://developers.facebook.com/tools/debug/
- [ ] Test LinkedIn preview: Share link and check preview

### 6. Performance & Optimization

- [ ] Images optimized (< 500KB each)
- [ ] No console errors or warnings
- [ ] Animations are smooth (60fps)
- [ ] Page load time < 3 seconds
- [ ] Mobile responsive on all devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### 7. Accessibility

- [ ] All images have alt text
- [ ] All links have descriptive aria-labels
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader friendly
- [ ] Touch targets are at least 44x44 pixels

---

## 🔧 Azure Deployment

### 8. Azure Setup

**Method 1: Azure Portal (Recommended for First Time)**

1. Prerequisites:

   - [ ] Azure account created (free tier available)
   - [ ] Logged into https://portal.azure.com
   - [ ] GitHub repository pushed and up to date

2. Create Static Web App:

   - [ ] Click "Create a resource" in Azure Portal
   - [ ] Search for "Static Web Apps"
   - [ ] Click "Create"
   - [ ] Fill in configuration:

     ```
     Subscription: [Your subscription]
     Resource Group: Create new "portfolio-rg"
     Name: lalith-portfolio
     Plan Type: Free
     Region: [Closest to you, e.g., East US]

     Deployment Details:
     Source: GitHub
     Organization: Lalith-47
     Repository: portfolio
     Branch: main

     Build Details:
     Build Presets: Next.js
     App location: /
     Output location: out
     ```

   - [ ] Click "Review + Create"
   - [ ] Click "Create"

3. Monitor Deployment:

   - [ ] Wait for Azure to create resource (2-3 minutes)
   - [ ] GitHub Actions workflow automatically created
   - [ ] Go to GitHub repo → Actions tab
   - [ ] Watch deployment progress
   - [ ] First build completes (5-10 minutes)

4. Verify Deployment:
   - [ ] Go to Azure Portal → Static Web Apps
   - [ ] Open your resource
   - [ ] Copy the URL (format: `*.azurestaticapps.net`)
   - [ ] Visit URL in browser
   - [ ] Site loads correctly

**Method 2: Azure CLI**

```bash
# Install Azure CLI (if not installed)
# Windows: https://aka.ms/installazurecliwindows

# Commands:
- [ ] az login
- [ ] az staticwebapp create --name lalith-portfolio --resource-group portfolio-rg --source https://github.com/Lalith-47/portfolio --location "eastus" --branch main --app-location "/" --output-location "out" --login-with-github
```

### 9. Post-Deployment Verification

**Functionality Testing:**

- [ ] Homepage loads correctly
- [ ] All sections visible (Home, About, Skills, Projects, Contact)
- [ ] Navbar navigation works
- [ ] Theme toggle works
- [ ] Smooth scroll works
- [ ] Social links open in new tab
- [ ] Resume download works (or shows fallback message)
- [ ] Contact form submits successfully
- [ ] Form sends email to your inbox
- [ ] Animations work properly
- [ ] No broken images or icons

**Responsive Testing:**

- [ ] Mobile (< 768px): iPhone, Android
- [ ] Tablet (768px - 1024px): iPad, Android tablet
- [ ] Desktop (> 1024px): Laptop, Desktop
- [ ] Large screens (> 1920px): 4K displays

**Browser Testing:**

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

**Performance Testing:**

- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Performance score: > 90
- [ ] Accessibility score: > 90
- [ ] Best Practices score: > 90
- [ ] SEO score: > 90

---

## 🎯 Post-Launch Tasks

### 10. Domain & Branding (Optional)

- [ ] Purchase custom domain (e.g., lalith.dev)
- [ ] Configure custom domain in Azure
- [ ] Update DNS records
- [ ] Update URLs in code to use custom domain
- [ ] Update sitemap.xml with new domain
- [ ] Update robots.txt with new domain
- [ ] Test custom domain works

### 11. Monitoring & Analytics (Optional)

- [ ] Add Google Analytics
- [ ] Add Microsoft Clarity (free)
- [ ] Set up uptime monitoring
- [ ] Configure Azure Application Insights
- [ ] Set up email alerts for downtime

### 12. SEO Submission

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Create Google My Business profile (optional)
- [ ] Share on social media
- [ ] Add to developer portfolios (Dev.to, Hashnode)

### 13. Continuous Updates

- [ ] Set up GitHub branch protection
- [ ] Create development branch for testing
- [ ] Document update process
- [ ] Plan content updates schedule
- [ ] Keep resume updated
- [ ] Add new projects as you build them

---

## 📋 Quick Commands Reference

```bash
# Local Development
npm install              # Install dependencies
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Test production build
npm run lint             # Check for code issues

# Git Operations
git status               # Check current changes
git add .                # Stage all changes
git commit -m "message"  # Commit with message
git push origin main     # Push to GitHub (triggers Azure deployment)

# Testing
npm run build            # Must succeed before deployment
curl http://localhost:3000  # Test local server

# Azure (if using CLI)
az login                 # Login to Azure
az staticwebapp list     # List your static web apps
az staticwebapp show --name lalith-portfolio  # Show details
```

---

## 🚨 Common Issues & Solutions

### Build Fails

**Issue:** GitHub Actions build fails  
**Solution:**

1. Check Actions tab for error message
2. Run `npm run build` locally
3. Fix any TypeScript or build errors
4. Commit and push fixes

### Form Not Working

**Issue:** Contact form doesn't submit  
**Solution:**

1. Verify Web3Forms access key is added
2. Check browser console for errors
3. Test with Web3Forms test form first
4. Check spam folder for emails

### Resume Not Downloading

**Issue:** Resume button doesn't work  
**Solution:**

1. Ensure `public/resume.pdf` exists
2. Test locally: http://localhost:3000/resume.pdf
3. Check file size (< 2MB recommended)
4. Verify file name is exactly `resume.pdf`

### Deployment Not Updating

**Issue:** Changes not appearing on live site  
**Solution:**

1. Check GitHub Actions completed successfully
2. Clear browser cache (Ctrl+Shift+R)
3. Wait 2-3 minutes for CDN propagation
4. Check if commit actually pushed: `git log`

---

## ✅ Final Checklist Summary

Before marking as "DEPLOYED":

**Critical (Must Do):**

- [ ] ✅ All personal links work (GitHub, LinkedIn, Email)
- [ ] ⏳ Resume PDF added OR fallback message acceptable
- [ ] ⏳ Contact form configured with Web3Forms
- [ ] ⏳ All placeholder content removed
- [ ] ⏳ Build succeeds locally
- [ ] ⏳ Deployed to Azure
- [ ] ⏳ Live site tested thoroughly
- [ ] ⏳ No console errors
- [ ] ⏳ Mobile responsive

**Recommended (Should Do):**

- [ ] Custom projects added (not placeholders)
- [ ] OpenGraph image customized
- [ ] Favicon updated
- [ ] Lighthouse scores > 90
- [ ] Cross-browser tested
- [ ] Social media previews tested

**Optional (Nice to Have):**

- [ ] Custom domain configured
- [ ] Google Analytics added
- [ ] Submitted to search engines
- [ ] Shared on social media

---

## 🎉 Success Metrics

Your portfolio is production-ready when:

✅ All critical tasks completed  
✅ Live URL accessible  
✅ No broken links or images  
✅ Form submissions work  
✅ Mobile and desktop responsive  
✅ Lighthouse performance > 85  
✅ No console errors  
✅ Professional appearance

---

## 📞 Need Help?

1. Check `SETUP_GUIDE.md` for detailed instructions
2. Check `README.md` for technical documentation
3. Review Azure documentation: https://docs.microsoft.com/azure/static-web-apps/
4. GitHub Issues: https://github.com/Lalith-47/portfolio/issues

---

**Ready to deploy? Let's go! 🚀**

Complete the checklist items, then push to GitHub. Your portfolio will automatically deploy to Azure!

```bash
git add .
git commit -m "feat: Portfolio ready for production deployment"
git push origin main
```

Watch the deployment in real-time:

1. GitHub → Repository → Actions tab
2. Azure Portal → Static Web Apps → Deployment History

**Congratulations on launching your portfolio! 🎉**

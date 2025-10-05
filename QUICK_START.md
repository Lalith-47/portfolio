# Contact Form - Quick Start Guide

## ✅ What's Been Implemented

Your portfolio now has a **fully functional contact form** that:
- Validates all inputs (name, email, subject, message)
- Shows loading spinner while sending
- Displays success/error notifications via toast
- Sends emails to **Lalith22p3347@gmail.com**
- Works on mobile, tablet, and desktop
- Includes proper error handling

## 🚀 To Make It Work (3 Steps)

### Step 1: Set up EmailJS (5 minutes)

1. Go to https://dashboard.emailjs.com/ and create a free account
2. Connect your Gmail (Lalith22p3347@gmail.com)
3. Create an email template (see EMAILJS_SETUP.md for details)
4. Get three keys:
   - Service ID
   - Template ID
   - Public Key

### Step 2: Configure Azure (2 minutes)

In Azure Portal → Your Static Web App → Configuration → Application settings:

Add these variables:
```
EMAILJS_SERVICE_ID = your_service_id
EMAILJS_TEMPLATE_ID = your_template_id
EMAILJS_PUBLIC_KEY = your_public_key
```

### Step 3: Deploy

```bash
# Build the project
npm run build

# Deploy to Azure (your existing process)
# The /api folder will automatically deploy as Azure Functions
```

That's it! The form will now work in production.

## 📝 For Local Testing (Optional)

1. Update `api/local.settings.json` with your EmailJS keys
2. Install Azure Functions Core Tools:
   ```bash
   npm install -g azure-functions-core-tools@4
   ```
3. Run in two terminals:
   ```bash
   # Terminal 1
   npm run dev
   
   # Terminal 2
   cd api
   func start
   ```

## 📚 Documentation

- **EMAILJS_SETUP.md** - Detailed EmailJS setup instructions
- **CONTACT_FORM_IMPLEMENTATION.md** - Complete technical documentation
- **QUICK_START.md** - This file

## 🧪 Testing Checklist

After deployment, test:
- [ ] Submit form with valid data → Should show success toast
- [ ] Check email at Lalith22p3347@gmail.com
- [ ] Try empty fields → Should show validation errors
- [ ] Try invalid email → Should show error
- [ ] Test on mobile device
- [ ] Test on different browsers

## 🔧 Files Modified/Created

### New Files (Backend)
- `api/sendEmail.js` - Azure Function handler
- `api/function.json` - Function configuration
- `api/host.json` - Runtime settings
- `api/package.json` - Dependencies
- `api/local.settings.json` - Environment variables (template)

### New Files (Frontend)
- `src/components/Toast.tsx` - Notification component

### Modified Files
- `src/components/sections/Contact.tsx` - Updated to use API
- `.gitignore` - Added API folder exceptions
- `public/staticwebapp.config.json` - Already had API routing ✓

### Documentation
- `EMAILJS_SETUP.md` - Setup guide
- `CONTACT_FORM_IMPLEMENTATION.md` - Technical docs
- `QUICK_START.md` - This file

## 💡 Important Notes

1. **Free Tier Limits:**
   - EmailJS: 200 emails/month (plenty for portfolio)
   - Azure Functions: 1 million requests/month

2. **Security:**
   - All sensitive data in environment variables
   - Server-side validation
   - CORS configured
   - No credentials in code

3. **No Breaking Changes:**
   - All existing functionality preserved
   - UI/UX unchanged
   - Mobile responsiveness maintained
   - Sidebar and navigation work as before

## 🆘 Need Help?

1. **Form not working?** → Check EMAILJS_SETUP.md
2. **API errors?** → Check Azure Function logs in Azure Portal
3. **No email received?** → Check spam folder and EmailJS dashboard
4. **Other issues?** → See CONTACT_FORM_IMPLEMENTATION.md troubleshooting

## ✨ You're All Set!

The form is ready to use once you complete the EmailJS setup and configure Azure environment variables. The existing UI is preserved, and everything is production-ready!

---

**Next Action:** Follow Step 1 above to set up EmailJS 🚀


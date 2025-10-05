# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable the contact form functionality on your portfolio.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account (supports 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Click **Connect Account**
   - Sign in with your Gmail account (Lalith22p3347@gmail.com)
   - Grant permissions
4. Copy your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** `portfolio_contact`

**Subject:** `New Portfolio Contact from {{from_name}}`

**Content:**

```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Save the template and copy your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (User ID) (e.g., `xxxxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Configure Azure Static Web App

### For Local Development:

1. Update `api/local.settings.json`:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "EMAILJS_SERVICE_ID": "your_service_id_here",
    "EMAILJS_TEMPLATE_ID": "your_template_id_here",
    "EMAILJS_PUBLIC_KEY": "your_public_key_here"
  }
}
```

### For Azure Production:

1. Go to your Azure Static Web App in Azure Portal
2. Navigate to **Configuration** → **Application settings**
3. Add these environment variables:
   - `EMAILJS_SERVICE_ID`: your service ID
   - `EMAILJS_TEMPLATE_ID`: your template ID
   - `EMAILJS_PUBLIC_KEY`: your public key
4. Click **Save**

## Step 6: Test the Contact Form

1. Build and deploy your application:

   ```bash
   npm run build
   ```

2. Test locally with Azure Functions Core Tools:

   ```bash
   npm install -g azure-functions-core-tools@4
   cd api
   func start
   ```

3. Open your portfolio and submit a test message
4. Check your email (Lalith22p3347@gmail.com) for the message

## Troubleshooting

### Issue: Email not received

- Check spam/junk folder
- Verify all environment variables are set correctly
- Check EmailJS dashboard for error logs
- Ensure Gmail service is properly connected

### Issue: API returns 500 error

- Check Azure Function logs in Azure Portal
- Verify environment variables in Azure Configuration
- Check that EmailJS account is active

### Issue: CORS errors

- The `staticwebapp.config.json` should already have proper API routing
- Ensure the API endpoint is `/api/sendEmail`

## Security Notes

1. Never commit `local.settings.json` with real credentials to Git
2. The `.gitignore` should exclude `local.settings.json`
3. Environment variables in Azure are secure and encrypted
4. EmailJS Public Key is safe to use client-side, but we're using it server-side for better security

## Free Tier Limits

- **EmailJS Free Plan:** 200 emails/month
- **Azure Functions Free Tier:** 1 million requests/month
- Both are more than sufficient for a portfolio website

## Alternative: Using Gmail SMTP Directly

If you prefer not to use EmailJS, you can modify `api/sendEmail.js` to use Nodemailer with Gmail SMTP. However, this requires:

- Enabling 2-factor authentication on your Gmail
- Creating an App Password
- Installing `nodemailer` package
- More complex configuration

EmailJS is recommended for its simplicity and security.

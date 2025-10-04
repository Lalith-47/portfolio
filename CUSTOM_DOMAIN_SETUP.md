# Custom Domain Setup for Azure Static Web App

## Add lalith.live to Your Portfolio

Your portfolio is now live at: https://ambitious-pond-0a5877700.2.azurestaticapps.net

To use your custom domain `lalith.live`, follow these steps:

---

## Step 1: Add Custom Domain in Azure

Run this command:

```powershell
& "C:\Program Files\Microsoft SDKs\Azure\CLI2\wbin\az.cmd" staticwebapp hostname set `
  --name MyPortfolio `
  --resource-group MyPortfolio_group-8faf `
  --hostname "lalith.live"
```

---

## Step 2: Get Validation TXT Record

Azure will provide you with a TXT record value for domain validation.

Run:

```powershell
& "C:\Program Files\Microsoft SDKs\Azure\CLI2\wbin\az.cmd" staticwebapp hostname show `
  --name MyPortfolio `
  --resource-group MyPortfolio_group-8faf `
  --hostname "lalith.live"
```

---

## Step 3: Update DNS Records

Go to your domain registrar (where you bought `lalith.live`) and add these records:

### A Record (for lalith.live):

- **Type:** A
- **Name:** @ (or leave blank for root domain)
- **Value:** Get the IP by running:
  ```powershell
  nslookup ambitious-pond-0a5877700.2.azurestaticapps.net
  ```

### CNAME Record (for www.lalith.live):

- **Type:** CNAME
- **Name:** www
- **Value:** ambitious-pond-0a5877700.2.azurestaticapps.net

### TXT Record (for validation):

- **Type:** TXT
- **Name:** @ or \_dnsauth
- **Value:** [The value from Step 2]

---

## Step 4: Wait for Propagation

DNS changes can take 24-48 hours to propagate, but usually complete within 1-2 hours.

Check status with:

```powershell
& "C:\Program Files\Microsoft SDKs\Azure\CLI2\wbin\az.cmd" staticwebapp hostname show `
  --name MyPortfolio `
  --resource-group MyPortfolio_group-8faf `
  --hostname "lalith.live"
```

When `"status": "Ready"`, your custom domain is live!

---

## Alternative: Use Azure Portal

1. Go to: https://portal.azure.com
2. Navigate to: MyPortfolio Static Web App
3. Click: **Custom domains** in the left menu
4. Click: **+ Add**
5. Enter: `lalith.live`
6. Follow the on-screen instructions

---

## SSL Certificate

Azure automatically provisions a free SSL certificate for your custom domain. Once the domain is validated, your site will be accessible via:

- https://lalith.live
- https://www.lalith.live

---

Your portfolio is production-ready! 🚀

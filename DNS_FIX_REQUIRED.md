# 🚨 DNS Configuration Required for lalith.live

## Current Status

### ✅ Working:
- **Azure Static Web App:** https://ambitious-pond-0a5877700.2.azurestaticapps.net
  - Status: **LIVE and WORKING** ✅
  - Your website is accessible and fully functional

- **Azure Custom Domain:** 
  - Domain: `lalith.live`
  - Azure Status: **Ready** ✅
  - SSL Certificate: **Provisioned** ✅

### ❌ Not Working:
- **DNS Resolution:** `lalith.live` **CANNOT BE RESOLVED**
  - Error: "Could not resolve host: lalith.live"
  - Reason: DNS records not configured at domain registrar

---

## 🔧 How to Fix (Required Steps)

You need to add DNS records at your **domain registrar** (where you bought `lalith.live`).

### Azure IP Address: `13.75.76.44`

---

## Step 1: Login to Your Domain Registrar

Go to the website where you purchased `lalith.live` (e.g., GoDaddy, Namecheap, Google Domains, etc.)

---

## Step 2: Add These DNS Records

### **A Record (Root Domain)**

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| A    | @ or (blank) | `13.75.76.44` | 3600 |

This makes `lalith.live` point to your Azure site.

---

### **CNAME Record (WWW Subdomain)**

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| CNAME | www | `ambitious-pond-0a5877700.2.azurestaticapps.net` | 3600 |

This makes `www.lalith.live` redirect to your site.

---

### **TXT Record (Domain Verification) - If Required**

Some registrars require domain verification. If Azure asked for this:

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| TXT | @ or _dnsauth | (Value provided by Azure during setup) | 3600 |

---

## Step 3: Remove Any Conflicting Records

⚠️ **IMPORTANT:** Remove any existing A or CNAME records for:
- `@` (root domain)
- `www`

These might conflict with your new records.

---

## Step 4: Wait for DNS Propagation

- **Typical Time:** 1-4 hours
- **Maximum Time:** 24-48 hours

### Check DNS Propagation:

Use these tools to verify your DNS is propagating:

1. **DNS Checker:** https://dnschecker.org/
   - Enter: `lalith.live`
   - Should show: `13.75.76.44`

2. **Command Line Check:**
   ```powershell
   nslookup lalith.live
   ```
   Should return: `13.75.76.44`

---

## Step 5: Update Site Configuration (After DNS Works)

Once DNS is working, update your site's URL in the code:

**File:** `src/pages/index.tsx`

Change line 25 from:
```typescript
url: "https://lalith-portfolio.azurestaticapps.net",
```

To:
```typescript
url: "https://lalith.live",
```

Then rebuild and redeploy:
```powershell
npm run build
npm run export
# Then deploy to Azure
```

---

## 📊 Common Domain Registrar Guides

### GoDaddy:
1. Go to: https://dcc.godaddy.com/manage/dns
2. Click: **DNS** → **Manage Zones**
3. Find: `lalith.live`
4. Click: **Add Record**

### Namecheap:
1. Go to: https://www.namecheap.com/myaccount/
2. Click: **Domain List**
3. Find: `lalith.live` → **Manage**
4. Go to: **Advanced DNS** tab
5. Click: **Add New Record**

### Google Domains:
1. Go to: https://domains.google.com/registrar/
2. Find: `lalith.live`
3. Click: **DNS** in left menu
4. Scroll to: **Custom records**
5. Click: **Manage custom records**

### Cloudflare:
1. Go to: https://dash.cloudflare.com/
2. Select: `lalith.live`
3. Click: **DNS** tab
4. Click: **Add record**

---

## ✅ How to Verify It's Working

### Test 1: DNS Resolution
```powershell
nslookup lalith.live
```
Should return: `Address: 13.75.76.44`

### Test 2: HTTP Access
```powershell
curl -I https://lalith.live
```
Should return: `HTTP/1.1 200 OK`

### Test 3: Browser
Open browser and go to:
- https://lalith.live
- https://www.lalith.live

Both should show your portfolio!

---

## 🔍 Troubleshooting

### Issue: "nslookup still fails after 24 hours"
**Solution:** 
- Contact your domain registrar support
- Verify you added records correctly
- Check for typos in IP address

### Issue: "DNS resolves but site shows error"
**Solution:**
- Wait another hour for SSL certificate
- Clear browser cache
- Try incognito/private browsing

### Issue: "www works but root domain doesn't"
**Solution:**
- Add the A record for `@` (root)
- Some registrars use `@`, others use blank/empty

---

## 📞 Need Help?

If you're stuck, let me know:
1. Which domain registrar you're using
2. Screenshot of your current DNS settings
3. What error you're seeing

---

## Summary

**Current Working URL:** https://ambitious-pond-0a5877700.2.azurestaticapps.net ✅

**Target URL:** https://lalith.live ❌ (DNS not configured)

**Next Steps:**
1. ✅ Azure is ready (already done!)
2. ❌ Add DNS records at domain registrar (YOU NEED TO DO THIS)
3. ⏳ Wait for propagation (1-4 hours)
4. ✅ Update site URL in code
5. 🚀 Deploy updated code

**Your website is live and working perfectly on Azure!** You just need to configure DNS at your domain registrar to make `lalith.live` work.

---

**IP to Use:** `13.75.76.44`  
**CNAME to Use:** `ambitious-pond-0a5877700.2.azurestaticapps.net`


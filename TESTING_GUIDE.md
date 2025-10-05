# Contact Form Testing Guide

## 🧪 Local Testing Setup Complete

The contact form is now ready for local testing with a Next.js API route that simulates the Azure Function.

### ✅ What's Been Configured:

1. **Next.js API Route** (`src/pages/api/sendEmail.ts`)

   - Handles POST requests to `/api/sendEmail`
   - Validates all form fields
   - Sends emails via EmailJS
   - Returns proper success/error responses

2. **Environment Variables** (in `next.config.js`)

   - EmailJS credentials embedded for testing
   - Service ID, Template ID, and Public Key configured

3. **Dev Server**
   - Running on `http://localhost:3000`
   - API routes enabled (static export temporarily disabled)

---

## 📋 Testing Checklist

### 1. Server Status

- [ ] Dev server running at http://localhost:3000
- [ ] No build errors in terminal
- [ ] No runtime errors in browser console

### 2. Form Validation Tests

#### ✅ Required Field Validation

Test each field by leaving it empty and submitting:

1. **Empty Name Field**

   - Navigate to Contact section
   - Leave "Name" empty
   - Fill other fields
   - Click "Send Message"
   - **Expected:** Red error message "Name is required"

2. **Empty Email Field**

   - Leave "Email" empty
   - Fill other fields
   - Click "Send Message"
   - **Expected:** Red error message "Email is required"

3. **Empty Subject Field**

   - Leave "Subject" empty
   - Fill other fields
   - Click "Send Message"
   - **Expected:** Red error message "Subject is required"

4. **Empty Message Field**
   - Leave "Message" empty
   - Fill other fields
   - Click "Send Message"
   - **Expected:** Red error message "Message is required"

#### ✅ Format Validation

5. **Invalid Email Format**

   - Enter invalid email: `notanemail`
   - Fill other fields
   - Click "Send Message"
   - **Expected:** "Please enter a valid email address"

6. **Invalid Email (missing @)**

   - Enter: `test.com`
   - **Expected:** Validation error

7. **Invalid Email (missing domain)**
   - Enter: `test@`
   - **Expected:** Validation error

#### ✅ Length Validation

8. **Name Too Short**

   - Enter 1 character: `A`
   - **Expected:** "Name must be at least 2 characters"

9. **Subject Too Short**

   - Enter 4 characters: `Test`
   - **Expected:** "Subject must be at least 5 characters"

10. **Message Too Short**
    - Enter 9 characters: `Hi there!`
    - **Expected:** "Message must be at least 10 characters"

### 3. Successful Submission Test

#### ✅ Valid Form Submission

11. **Complete Valid Form**

    ```
    Name: John Doe
    Email: john.doe@example.com
    Subject: Testing Contact Form
    Message: This is a test message for the contact form validation and email sending functionality.
    ```

    - Fill all fields with valid data
    - Click "Send Message"

    **Expected Behavior:**

    1. Button shows spinner and "Sending..." text
    2. Button becomes disabled during submission
    3. Loading state visible
    4. After ~2-3 seconds:
       - ✅ Toast notification appears: "Message sent successfully! I'll get back to you soon."
       - ✅ Success screen shows with green checkmark
       - ✅ Form resets
    5. Check terminal/console for: `✅ Email sent successfully`
    6. **Check email:** `Lalith22p3347@gmail.com` should receive the message

### 4. API Endpoint Tests

#### ✅ Network Request Verification

12. **Open Browser DevTools**

    - Press F12
    - Go to "Network" tab
    - Filter: "Fetch/XHR"
    - Submit form with valid data

    **Verify:**

    - Request URL: `http://localhost:3000/api/sendEmail`
    - Method: `POST`
    - Request Headers: `Content-Type: application/json`
    - Request Body:
      ```json
      {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Testing Contact Form",
        "message": "This is a test message..."
      }
      ```
    - Response Status: `200 OK`
    - Response Body:
      ```json
      {
        "success": true,
        "message": "Message sent successfully"
      }
      ```

#### ✅ Console Logging

13. **Check Console Output**

    In Browser Console (F12 → Console tab):

    - Should see: `Form submitted successfully`
    - No red error messages

    In Terminal (where dev server runs):

    ```
    📬 Contact form submission received
    Method: POST
    📝 Form data: { name, email, subject, messageLength }
    📧 Sending email via EmailJS...
    ✅ Email sent successfully
    ✅ Success! Email sent to Lalith22p3347@gmail.com
    ```

### 5. Error Scenario Tests

#### ✅ Simulated API Failures

14. **Test Error Handling**

    - Temporarily disconnect internet
    - Submit valid form
    - **Expected:**
      - Red toast notification appears
      - Error message: "Failed to send message. Please try again later..."
      - Form not reset
      - Error displayed in console

15. **Server-Side Validation**
    - Use browser DevTools to bypass client validation
    - Send invalid data directly to API
    - **Expected:** Proper server-side validation errors

### 6. UI/UX Tests

#### ✅ Loading States

16. **Button State During Submission**

    - Submit form
    - **Verify:**
      - Button shows spinner icon
      - Text changes to "Sending..."
      - Button is disabled (cursor: not-allowed)
      - Button has reduced opacity

17. **Toast Notifications**

    - Success toast: Green with checkmark
    - Error toast: Red with alert icon
    - Auto-dismisses after 5 seconds
    - Manual close button works
    - Toast positioned at top-right

18. **Success Screen**
    - Green checkmark icon
    - "Message Sent!" heading
    - Thank you message
    - "Send Another Message" button works
    - Clicking button returns to form

### 7. Layout & Responsiveness Tests

#### ✅ Desktop View (1920x1080)

19. **Desktop Layout**
    - Form beside contact info (2-column grid)
    - All elements aligned properly
    - Buttons full width
    - Toast visible at top-right
    - Sidebar/navigation works during submission
    - No layout shifts after submission

#### ✅ Tablet View (768px)

20. **Tablet Layout**
    - Switch to responsive mode (F12 → Toggle device toolbar)
    - Set to iPad (768x1024)
    - **Verify:**
      - Form stacks vertically
      - All fields remain readable
      - Buttons accessible
      - Toast still visible

#### ✅ Mobile View (375px)

21. **Mobile Layout**
    - Switch to iPhone SE (375x667)
    - **Verify:**
      - Single column layout
      - Form fields full width
      - Text remains readable
      - Buttons easily tappable (min 44px height)
      - Toast notification responsive
      - No horizontal scroll

### 8. Accessibility Tests

#### ✅ Keyboard Navigation

22. **Tab Through Form**

    - Tab through all fields
    - **Verify:**
      - Focus indicators visible
      - Logical tab order
      - Can submit with Enter key
      - Can close toast with Esc (if implemented)

23. **Screen Reader**
    - Check ARIA labels
    - Error announcements
    - Success announcements

### 9. Integration Tests

#### ✅ Multiple Submissions

24. **Send Multiple Messages**

    - Submit first message
    - Click "Send Another Message"
    - Submit second message
    - **Verify:** Both work correctly

25. **Navigate Away and Back**
    - Start filling form
    - Click "About" section
    - Return to "Contact"
    - **Verify:** Form state preserved or reset appropriately

### 10. Email Verification

#### ✅ Check Actual Email

26. **Verify Email Receipt**
    - Check inbox: `Lalith22p3347@gmail.com`
    - **Verify:**
      - Email received
      - Professional template formatting
      - Correct sender name
      - Correct sender email
      - Subject line includes form subject
      - Message body formatted correctly
      - Reply-To address is sender's email

---

## 🐛 Common Issues & Solutions

### Issue: API endpoint returns 404

**Solution:**

- Ensure `output: "export"` is commented out in `next.config.js`
- Restart dev server: `npm run dev`

### Issue: EmailJS credentials not found

**Solution:**

- Check `next.config.js` has `env` section with credentials
- Restart dev server to pick up changes

### Issue: CORS errors

**Solution:**

- Should not occur in local testing
- If it does, API route handles CORS automatically

### Issue: Form doesn't submit

**Solution:**

- Check browser console for errors
- Verify network tab shows POST request
- Check terminal for server errors

---

## 📊 Testing Results Template

```markdown
## Testing Results - [Date]

### Environment

- Browser: [Chrome/Firefox/Safari/Edge]
- OS: [Windows/Mac/Linux]
- Screen Size: [1920x1080]
- Node Version: [18.x]

### Test Results

- [ ] All validation tests passed
- [ ] Successful submission works
- [ ] Error handling works
- [ ] Loading states work
- [ ] Toast notifications work
- [ ] Responsive on desktop
- [ ] Responsive on tablet
- [ ] Responsive on mobile
- [ ] Email received successfully
- [ ] No console errors
- [ ] No layout issues

### Issues Found

1. [Issue description if any]
2. [Issue description if any]

### Screenshots

[Attach screenshots of successful submission, email received, etc.]
```

---

## 🚀 After Testing

Once all tests pass:

1. **Re-enable static export** in `next.config.js`:

   ```js
   output: "export",  // Uncomment this line
   ```

2. **Remove hardcoded credentials** from `next.config.js`:

   ```js
   // Delete the env section (credentials will be in Azure)
   ```

3. **Commit changes:**

   ```bash
   git add .
   git commit -m "test: verify contact form functionality"
   ```

4. **Deploy to Azure:**

   ```bash
   git push
   ```

5. **Add environment variables** to Azure Portal

6. **Test on production** site

---

## 📝 Notes

- **Local Testing:** Uses Next.js API routes
- **Production:** Uses Azure Functions (in `/api` folder)
- Both implementations are identical in validation and logic
- EmailJS credentials must be added to Azure Portal for production

---

## ✅ Quick Test Commands

```bash
# Start dev server
npm run dev

# In browser
# 1. Navigate to http://localhost:3000
# 2. Scroll to Contact section
# 3. Fill form with valid data
# 4. Submit and verify email received

# Check logs
# - Browser Console (F12)
# - Terminal where npm run dev is running
```

---

**Ready to test!** 🎉

Visit: http://localhost:3000 and scroll to the Contact section

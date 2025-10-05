/**
 * Azure Function: Send Email
 * 
 * Handles contact form submissions and sends emails using EmailJS.
 * This function is serverless and runs on Azure Static Web Apps.
 * 
 * @author Lalith
 * @version 1.0.0
 */

const https = require('https');

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

/**
 * Send email using EmailJS REST API
 */
function sendEmailViaEmailJS(data) {
  return new Promise((resolve, reject) => {
    // EmailJS Configuration
    // Get these from: https://dashboard.emailjs.com/
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const emailData = JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'Lalith22p3347@gmail.com',
        reply_to: data.email
      }
    });

    const options = {
      hostname: 'api.emailjs.com',
      port: 443,
      path: '/api/v1.0/email/send',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': emailData.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve({ success: true, message: 'Message sent successfully' });
        } else {
          reject(new Error(`EmailJS API returned status ${res.statusCode}: ${responseData}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(emailData);
    req.end();
  });
}

/**
 * Main Azure Function handler
 */
module.exports = async function (context, req) {
  context.log('Contact form submission received');

  // Set CORS headers for Azure Static Web Apps
  context.res = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  };

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    context.res.status = 200;
    context.res.body = '';
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    context.res.status = 405;
    context.res.body = JSON.stringify({
      success: false,
      message: 'Method not allowed. Use POST.'
    });
    return;
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      context.res.status = 400;
      context.res.body = JSON.stringify({
        success: false,
        message: 'All fields are required (name, email, subject, message)'
      });
      return;
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 50) {
      context.res.status = 400;
      context.res.body = JSON.stringify({
        success: false,
        message: 'Name must be between 2 and 50 characters'
      });
      return;
    }

    if (subject.length < 5 || subject.length > 100) {
      context.res.status = 400;
      context.res.body = JSON.stringify({
        success: false,
        message: 'Subject must be between 5 and 100 characters'
      });
      return;
    }

    if (message.length < 10 || message.length > 1000) {
      context.res.status = 400;
      context.res.body = JSON.stringify({
        success: false,
        message: 'Message must be between 10 and 1000 characters'
      });
      return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
      context.res.status = 400;
      context.res.body = JSON.stringify({
        success: false,
        message: 'Please provide a valid email address'
      });
      return;
    }

    // Send email
    const result = await sendEmailViaEmailJS({ name, email, subject, message });

    context.log('Email sent successfully');
    context.res.status = 200;
    context.res.body = JSON.stringify(result);

  } catch (error) {
    context.log.error('Error sending email:', error);
    context.res.status = 500;
    context.res.body = JSON.stringify({
      success: false,
      message: 'Failed to send message. Please try again later or email directly at Lalith22p3347@gmail.com'
    });
  }
};


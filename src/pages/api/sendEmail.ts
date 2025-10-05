/**
 * Next.js API Route - Contact Form Handler (Local Testing)
 *
 * This API route simulates the Azure Function for local testing.
 * In production, requests go directly to Azure Functions at /api/sendEmail
 *
 * @author Lalith
 * @version 1.0.0
 */

import type { NextApiRequest, NextApiResponse } from "next";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ResponseData {
  success: boolean;
  message: string;
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

/**
 * Simulate sending email via EmailJS
 */
async function sendEmail(data: FormData): Promise<ResponseData> {
  // EmailJS Configuration from environment variables
  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error("❌ EmailJS credentials not configured");
    console.log("Please set environment variables:");
    console.log("- EMAILJS_SERVICE_ID");
    console.log("- EMAILJS_TEMPLATE_ID");
    console.log("- EMAILJS_PUBLIC_KEY");
    throw new Error("EmailJS not configured. Check console for details.");
  }

  const emailData = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: "Lalith22p3347@gmail.com",
      reply_to: data.email,
    },
  };

  try {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      }
    );

    if (response.ok) {
      console.log("✅ Email sent successfully");
      return {
        success: true,
        message: "Message sent successfully",
      };
    } else {
      const errorText = await response.text();
      console.error("❌ EmailJS API error:", response.status, errorText);
      throw new Error(`EmailJS API returned status ${response.status}`);
    }
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    throw error;
  }
}

/**
 * Main API handler
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log("\n📬 Contact form submission received");
  console.log("Method:", req.method);

  // Only allow POST requests
  if (req.method !== "POST") {
    console.log("❌ Invalid method:", req.method);
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Use POST.",
    });
  }

  try {
    const { name, email, subject, message } = req.body as FormData;

    console.log("📝 Form data:", {
      name,
      email,
      subject,
      messageLength: message?.length,
    });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log("❌ Missing required fields");
      return res.status(400).json({
        success: false,
        message: "All fields are required (name, email, subject, message)",
      });
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 50) {
      console.log("❌ Invalid name length");
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 50 characters",
      });
    }

    if (subject.length < 5 || subject.length > 100) {
      console.log("❌ Invalid subject length");
      return res.status(400).json({
        success: false,
        message: "Subject must be between 5 and 100 characters",
      });
    }

    if (message.length < 10 || message.length > 1000) {
      console.log("❌ Invalid message length");
      return res.status(400).json({
        success: false,
        message: "Message must be between 10 and 1000 characters",
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      console.log("❌ Invalid email format");
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Send email
    console.log("📧 Sending email via EmailJS...");
    const result = await sendEmail({ name, email, subject, message });

    console.log("✅ Success! Email sent to Lalith22p3347@gmail.com");
    return res.status(200).json(result);
  } catch (error) {
    console.error("❌ Error processing request:", error);
    return res.status(500).json({
      success: false,
      message:
        "Failed to send message. Please try again later or email directly at Lalith22p3347@gmail.com",
    });
  }
}

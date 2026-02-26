/**
 * Email service using EmailJS
 * Configure your EmailJS credentials in .env
 */

import emailjs from "@emailjs/browser";

// Initialize EmailJS (call this once on app startup)
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

interface EmailData {
  name: string;
  email: string;
  message: string;
}

/**
 * Send email via EmailJS
 */
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error("EmailJS configuration missing");
      return false;
    }

    await emailjs.send(serviceId, templateId, {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: import.meta.env.VITE_CONTACT_EMAIL,
    });

    return true;
  } catch (error) {
    console.error("Email send failed:", error);
    return false;
  }
};

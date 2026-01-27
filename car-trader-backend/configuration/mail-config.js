import { MailtrapClient } from "mailtrap";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./mail-templates.js";

// Initialize Mailtrap client
export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

// Sender configuration
export const sender = {
  email: "hello@car-trader.site",
  name: "CAR TRADER",
};

// Send verification email
export const sendVerificationEmail = async (email, verifytoken) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verifytoken,
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

// Send welcome email
export const sendWelcomeEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Account Verified",
      html: WELCOME_EMAIL_TEMPLATE,
      category: "Welcome",
    });

    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

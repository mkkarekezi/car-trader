import { MailtrapClient } from "mailtrap";

export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

import nodemailer from "nodemailer";

export const mailtrapClient = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6f829c45a4730a",
    pass: "****a7a3",
  },
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "CAR TRADER",
};

// ////////////////////////
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./mail-templates.js";

export const sendVerificationEmail = async (email, verifytoken) => {
  try {
    const response = await mailtrapClient.sendMail({
      from: '"CAR TRADER" <hello@car-trader.site>',
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verifytoken,
      ),
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email) => {
  try {
    const response = await mailtrapClient.sendMail({
      from: '"CAR TRADER" <hello@car-tader.>',
      to: email,
      subject: "account verified",
      html: WELCOME_EMAIL_TEMPLATE,
    });

    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

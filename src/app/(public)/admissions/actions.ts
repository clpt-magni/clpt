"use server";

import nodemailer from "nodemailer";
import { createClient } from "next-sanity";

// Sanity write client for enquiry backups
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vpfov1jc',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-10-01',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN || process.env.SANITY_WRITE_TOKEN,
});

export interface EnquiryData {
  name: string;
  phone: string;
  email?: string;
  program: string;
  stream?: string;
  state?: string;
  query?: string;
}

export async function sendEnquiryEmail(data: EnquiryData) {
  if (!data.name || !data.phone || !data.program) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const { name, phone, email, program, stream, state, query } = data;

  // Try backing up to Sanity first to prevent any data loss
  try {
    await writeClient.create({
      _type: "enquiry",
      name,
      phone,
      email: email || undefined,
      program,
      stream: stream || undefined,
      state: state || undefined,
      query: query || undefined,
      submittedAt: new Date().toISOString(),
    });
    console.log("Enquiry backup saved to Sanity.io successfully.");
  } catch (sanityError) {
    console.error("Sanity.io backup failed:", sanityError);
  }

  const emailHost = process.env.EMAIL_HOST || "smtp.gmail.com";
  const emailPort = parseInt(process.env.EMAIL_PORT || "465");
  const emailUser = process.env.EMAIL_USER || "admin@chalapathipharmacy.ac.in";
  const emailPass = process.env.EMAIL_PASS; // App Password from environment
  const emailTo = process.env.EMAIL_TO || "principalclpt@gmail.com, officeclpt2@gmail.com";

  if (!emailPass) {
    console.warn("SMTP email password is not configured yet. Logging enquiry data:", data);
    return {
      success: true,
      pendingConfig: true,
      message: "Enquiry successfully received and backed up to Sanity.io! However, SMTP email is pending setup.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465, // true for 465, false for 587
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const emailSubject = `New Admission Enquiry: ${name} - ${program.toUpperCase()}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #0F3C6E; border-bottom: 2px solid #F4B400; padding-bottom: 12px; margin-top: 0; font-family: 'Poppins', Arial, sans-serif; text-transform: uppercase; font-size: 20px; tracking-wide: 1px;">
          New Admission Enquiry
        </h2>
        <p style="font-size: 14px; color: #334155; line-height: 1.6; margin-top: 15px;">
          A student has submitted an enquiry sheet through the Admissions Portal on the CLPT website. Below are the details:
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; width: 35%; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 700;"><a href="tel:${phone}" style="color: #0F3C6E; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">${email ? `<a href="mailto:${email}" style="color: #0F3C6E; text-decoration: none;">${email}</a>` : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Interested Program</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-size: 14px; color: #e11d48; font-weight: bold; text-transform: uppercase;">${program}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Student Stream</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: bold; text-transform: uppercase;">${stream || 'Not Specified'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">State / Region</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 600;">${state || 'Not Specified'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message/Query</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-size: 14px; color: #334155; line-height: 1.5; white-space: pre-line;">${query || '<span style="color: #94a3b8; font-style: italic;">No specific query entered</span>'}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 15px; letter-spacing: 0.5px;">
          This message was sent automatically from the CLPT Admissions Helpdesk System. Please do not reply directly to this mail.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"CLPT Admissions Helpdesk" <${emailUser}>`,
      to: emailTo,
      replyTo: email || undefined,
      subject: emailSubject,
      html: emailHtml,
    });

    return { success: true, message: "Your enquiry sheet has been successfully submitted and sent to the Principal." };
  } catch (error: any) {
    console.error("Error sending enquiry email via SMTP:", error);
    return {
      success: false,
      error: "Failed to send email. Please verify the SMTP configuration or try again later.",
      details: error.message,
    };
  }
}

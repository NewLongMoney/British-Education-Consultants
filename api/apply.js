export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, country, trained_teacher, bnc_experience, experience, motivation } = req.body;
  const RESEND_API_KEY = 're_98nLTpNR_9DzhbmtWCTUWT2ye1UcybAiq';

  // Branding Tokens (Precise BEC Colors from Brand Logo)
  const colors = {
    navy: '#0a1628',    // Deep Navy
    red: '#c41230',     // Crimson Red
    white: '#ffffff',
    slate: '#111827',   // Darker slate for premium feel
    card: '#1e293b',    // Card background
    muted: '#94a3b8'    // Text muted
  };

  const logoUrl = 'https://britedconsult.com/images/Logo/Main%20Logo.jpeg';

  // Internal Notification Template (BEC Team)
  const emailHtml = `
    <div style="background-color: #020617; font-family: 'DM Sans', Arial, sans-serif; padding: 40px 20px; color: #f8fafc;">
      <div style="max-width: 600px; margin: 0 auto;">
        
        <!-- Premium Branded Header -->
        <div style="background-color: #0a1628; border-radius: 16px 16px 0 0; padding: 48px 32px; text-align: center; border-bottom: 2px solid #c41230; position: relative;">
            <!-- Brand Logo -->
            <div style="margin-bottom: 24px;">
                <img src="${logoUrl}" alt="BEC Logo" style="height: 64px; width: auto; display: inline-block; vertical-align: middle;">
                <div style="display: inline-block; vertical-align: middle; text-align: left; padding: 0 20px; color: #ffffff; margin-left: 0;">
                    <span style="display: block; font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.1em; line-height: 1.2;">British Education<br>Consultants</span>
                </div>
            </div>
            <h1 style="color: #ffffff; margin: 0; font-family: 'Instrument Serif', Georgia, serif; font-size: 32px; font-weight: normal; letter-spacing: -0.01em;">Application Details</h1>
        </div>

        <!-- Notification Banner -->
        <div style="background-color: #c41230; padding: 12px 32px; text-align: center; color: #ffffff; font-size: 13px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700;">
            New Candidate Submission
        </div>

        <!-- Personal Info Card -->
        <div style="background-color: #1e293b; padding: 32px; border-bottom: 1px solid #334155;">
            <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                <div style="border-left: 3px solid #c41230; padding-left: 20px;">
                    <span style="display: block; font-size: 11px; color: #94a3b8; text-transform: uppercase; font-weight: 700; margin-bottom: 8px; letter-spacing: 0.1em;">Full Name</span>
                    <span style="font-size: 20px; color: #ffffff; font-weight: 500;">${name}</span>
                </div>
                <div style="border-left: 3px solid #c41230; padding-left: 20px;">
                    <span style="display: block; font-size: 11px; color: #94a3b8; text-transform: uppercase; font-weight: 700; margin-bottom: 8px; letter-spacing: 0.1em;">Contact details</span>
                    <span style="font-size: 16px; color: #ffffff;">${email} | ${phone}</span>
                </div>
                <div style="border-left: 3px solid #c41230; padding-left: 20px;">
                    <span style="display: block; font-size: 11px; color: #94a3b8; text-transform: uppercase; font-weight: 700; margin-bottom: 8px; letter-spacing: 0.1em;">Location</span>
                    <span style="font-size: 16px; color: #ffffff;">${country}</span>
                </div>
            </div>
        </div>

        <!-- Background & Experience -->
        <div style="background-color: #0f172a; border-radius: 0 0 16px 16px; border: 1px solid #1e293b; padding: 40px 32px;">
            <div style="margin-bottom: 32px;">
                <h3 style="color: #c41230; font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 20px; font-weight: 700;">Teaching Background</h3>
                <div style="background-color: #1e293b; padding: 24px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #334155;">
                    <p style="margin: 0 0 12px 0; font-size: 14px;"><strong style="color: #94a3b8;">Trained Teacher:</strong> <span style="color: #ffffff;">${trained_teacher}</span></p>
                    <p style="margin: 0; font-size: 14px;"><strong style="color: #94a3b8;">BNC Experience:</strong> <span style="color: #ffffff;">${bnc_experience}</span></p>
                </div>
                <div style="color: #cbd5e1; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${experience}</div>
            </div>

            <div style="margin-bottom: 32px;">
                <h3 style="color: #c41230; font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 20px; font-weight: 700;">Motivation</h3>
                <div style="color: #cbd5e1; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${motivation}</div>
            </div>

            <div style="background-color: #1e293b; padding: 24px; border-radius: 8px; text-align: center; border: 1px solid #334155;">
                <p style="margin: 0; color: #94a3b8; font-size: 13px;">Verify payment of KES 2,500 training fee before scheduling qualifying interview.</p>
            </div>
        </div>

        <!-- Footer -->
        <div style="padding: 40px 0; text-align: center;">
            <p style="color: #475569; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em;">&copy; 2026 British Education Consultants</p>
        </div>
      </div>
    </div>
  `;

  // Applicant Confirmation Template
  const responseHtml = `
    <div style="background-color: #f8f6f0; font-family: 'DM Sans', Arial, sans-serif; padding: 40px 20px; color: #0a1628;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
        
        <!-- Branded Header -->
        <div style="background-color: #0a1628; padding: 48px 32px; text-align: center; border-bottom: 4px solid #c41230;">
            <!-- Brand Logo -->
            <div style="margin-bottom: 24px;">
                <img src="${logoUrl}" alt="BEC Logo" style="height: 56px; width: auto; display: inline-block; vertical-align: middle;">
                <div style="display: inline-block; vertical-align: middle; text-align: left; padding: 0 16px; color: #ffffff; margin-left: 0;">
                    <span style="display: block; font-size: 10px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.1em; line-height: 1.2;">British Education<br>Consultants</span>
                </div>
            </div>
            <h1 style="color: #ffffff; margin: 0; font-family: 'Instrument Serif', Georgia, serif; font-size: 28px; font-weight: normal; letter-spacing: 0;">Application Received</h1>
        </div>

        <div style="padding: 48px 40px;">
            <p style="font-size: 17px; margin-bottom: 24px;">Dear ${name.split(' ')[0]},</p>
            <p style="font-size: 16px; line-height: 1.8; margin-bottom: 32px;">Thank you for your interest in British Education Consultants. We have received your application for the Teacher Training & Upskilling programme.</p>
            
            <div style="background-color: #fef2f2; padding: 32px; border-radius: 8px; border-left: 6px solid #c41230; margin-bottom: 32px;">
                <h3 style="color: #991b1b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0; margin-bottom: 12px; font-weight: 700;">Mandatory Training Fee</h3>
                <p style="color: #991b1b; font-size: 15px; line-height: 1.6; margin: 0;">Please ensure the processing and training fee of <strong>KES 2,500</strong> has been settled via Paybill <strong>625625</strong> (Acc: 7718481050). Verification is required before the interview stage.</p>
            </div>

            <p style="font-size: 15px; color: #475569; line-height: 1.8; margin-bottom: 40px;">Our board will review your profile and contact you within 3-5 business days regarding the qualifying interview.</p>
            
            <p style="font-size: 14px; color: #0a1628; margin: 0;">Best Regards,<br><strong style="font-family: 'Instrument Serif', Georgia, serif; font-size: 18px;">Applications Team</strong><br>British Education Consultants</p>
        </div>

        <div style="background-color: #0a1628; color: #ffffff; padding: 32px; text-align: center;">
            <p style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.7;">&copy; 2026 British Education Consultants</p>
        </div>
      </div>
    </div>
  `;

  try {
    // 1. Owner Notification
    const ownerRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'BEC Applications <onboarding@resend.dev>',
        to: ['info@britedconsult.com'],
        bcc: ['wanami33@gmail.com'],
        subject: `[BEC] New Application: ${name}`,
        html: emailHtml
      })
    });
    
    if (!ownerRes.ok) {
        const error = await ownerRes.json();
        console.error('Resend Owner Error:', error);
        throw new Error(error.message || 'Resend error');
    }

    // 2. Applicant Confirmation
    const applicantRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'British Education Consultants <onboarding@resend.dev>',
        to: [email],
        subject: `Application Received - British Education Consultants`,
        html: responseHtml
      })
    });

    if (!applicantRes.ok) {
        const error = await applicantRes.json();
        console.error('Resend Applicant Error:', error);
        throw new Error(error.message || 'Resend error');
    }


    return res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send application' });
  }
}

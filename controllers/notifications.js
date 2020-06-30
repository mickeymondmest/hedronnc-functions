// Import Dependencies
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const twilio = require('twilio');

// Initialize SendGrid SDK
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Initialize Twilio Client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
  { lazyLoading: true }
);

// Send Email Notification
exports.email = (req, res) => {
  // Collect Message Details from Req Body
  const { to, from, subject, message } = req.body;
  // Construct Message Req Object
  const msg = {
    to: to,
    from: from,
    subject: subject,
    html: `<strong>${message}</strong>`
  };
  // Try To Send Email
  sgMail.send(msg).then(result => {
    // Log Success Result
    console.log(result);
    // Return Successfully Sent Email
    return res.json({ message: 'Email Sent Successfully' });
  }).catch(error => {
    // Log Error To Console
    console.log(error);
    // Return Error Response
    return res.json({ message: 'Email Failed To Send' });
  });
}

// Send SMS Notification
exports.sms = (req, res) => {
  // Collect Message Details from Req Body
  const { to, message } = req.body;
  // Construct Message Req Object
  const msg = {
    from: process.env.TWILIO_FROM,
    to: to,
    body: message,
  }
  // Try To Send SMS
  twilioClient.messages.create(msg).then(result => {
    // Log Success Result
    console.log(result);
    // Return Successfully Sent SMS
    return res.json({ message: 'SMS Sent Successfully' });
  }).catch(error => {
    // Log Error To Console
    console.log(error);
    // Return Error Response
    return res.json({ message: 'SMS Failed To Send' });
  });
}

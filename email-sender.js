// email-sender.js
const nodemailer = require('nodemailer');

// 1. Create a transporter object using your email service's SMTP settings.
//    This example is configured for Gmail[citation:5][citation:6].
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can also use other services like 'outlook'
  auth: {
    user: 'YOUR_EMAIL@gmail.com', // Your full email address
    pass: 'YOUR_APP_PASSWORD',    // Your app password or account password
  },
});

// 2. Define the email options (who, what, subject, etc.).
const mailOptions = {
  from: '"Your Name" <YOUR_EMAIL@gmail.com>', // Sender address
  to: 'RECIPIENT_EMAIL@example.com',          // List of receivers (send to yourself)
  subject: 'Hello from Node.js!',              // Subject line
  text: 'This is a plain text email sent using Node.js and Nodemailer.', // Plain text body
  html: '<b>This is an HTML email</b> sent using <i>Node.js</i> and Nodemailer.', // HTML body
};

// 3. Send the email.
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    // Ethereal Email (a test service) provides a preview URL[citation:1].
    // console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
  }
});

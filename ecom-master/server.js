const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('your-sendgrid-api-key');

const msg = {
  to: 'recipient-email@example.com',
  from: 'your-email@example.com',
  subject: 'Thanks for Subscribing!',
  text: 'Thanks for subscribing to our newsletter. Stay tuned for exciting updates!',
};

sgMail.send(msg)
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });

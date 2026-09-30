import React from 'react';
import Typography from '@mui/material/Typography';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div
    id="contact"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh'
    }}
    >
      <div className="items-container">
        <div className="contact_wrapper">
        <div className="contact_wrapper" style={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Get in Touch
        </Typography>
          <Typography variant="body1" paragraph>
            Hi, I'm Ethan Goodman. I love connecting with new people, discussing creative ideas, and implementing solutions.
          </Typography>
          <Typography variant="body1" paragraph>
            You can reach me at:
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> <a href="mailto:ethangoodman45@gmail.com">ethangoodman45@gmail.com</a>
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> (336)-392-1004
          </Typography>
          <Typography variant="body1" paragraph style={{ marginTop: '1rem' }}>
            Thanks for visiting my contact page. I look forward to hearing from you!
          </Typography>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

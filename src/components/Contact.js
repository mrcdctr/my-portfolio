import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thanks for reaching out! I'll get back to you soon.</p>
      ) : (
        <form action="https://formspree.io/f/xvgzaeny" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;

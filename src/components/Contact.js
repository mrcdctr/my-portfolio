import React from 'react';

function Contact() {
  return (
    <section id="contact">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/xvgzaeny" method="POST">
            <label>Name:</label>
            <input type="text" name="name" required>
            <label>Email:</label>
            <input type="email" name="email" required>
            <label>Message:</label>
            <textarea name="message" rows="5" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
  );
}

export default Contact;
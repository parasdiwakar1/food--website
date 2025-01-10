import React, { useState } from 'react';
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form Data:', formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Feel free to reach out with any questions or comments.</p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {submitted && <p className="success-message">Thank you for reaching out! We'll get back to you soon.</p>}
        </form>

        {/* Additional Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> Pune </p>
          <p><strong>Phone:</strong> +91-1234567890</p>
          <p><strong>Email:</strong> support@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

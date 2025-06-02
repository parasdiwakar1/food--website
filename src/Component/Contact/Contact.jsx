import React, { useState } from 'react';
import './Contact.css';

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
    <div className="contact-page">
      <div className="contact-wrapper">
        {/* Image Section */}
        <div className="contact-image-section">
          <img src="./food.jpg" alt="Contact Visual" />
        </div>

        {/* Form Section */}
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <p>Have a question, comment, or just want to say hello? We'd love to hear from you.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
            {submitted && <p className="success">Thank you! We'll respond soon.</p>}
          </form>

          <div className="contact-details">
            <p><strong> Address:</strong> Pune, Maharashtra</p>
            <p><strong> Phone:</strong> +91-1234567890</p>
            <p><strong> Email:</strong> support@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

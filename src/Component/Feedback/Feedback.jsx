import React, { useState } from "react";
import "./Feedback.css"; 

const FeedbackForm = () => {

  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState([]);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!name.trim() || !feedback.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    // Add new feedback to the list
    setSubmittedFeedback([...submittedFeedback, { name, feedback }]);

    // Clear form fields
    setName("");
    setFeedback("");
  };

  return (
    <div className="container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            placeholder="Share your feedback"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Feedback</h3>
      {submittedFeedback.length > 0 ? (
        <ul className="feedback-list">
          {submittedFeedback.map((item, index) => (
            <li key={index} className="feedback-item">
              <strong>{item.name}</strong>
              <p>{item.feedback}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback submitted yet.</p>
      )}
    </div>
  );
};

export default FeedbackForm;

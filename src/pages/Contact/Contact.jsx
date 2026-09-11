import React, { useState } from 'react'
import '../Pages.css'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className='page'>
      <h1>Contact Us</h1>
      <p className='page-subtitle'>We would love to hear from you. Ask a question, report an issue, or share your feedback.</p>

      <h2>Get in touch</h2>
      <p>
        If you have a question about the service, a suggestion for a new feature,
        or a problem with sharing or finding text, do not hesitate to write to us.
        We read every message and reply as quickly as we can.
      </p>
      <ul>
        <li><strong>Email:</strong> support@easytextshare.me</li>
        <li><strong>Service:</strong> EasyTextShare text sharing tool</li>
      </ul>

      <h2>Send us a message</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          placeholder="Write your message here"
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send message</button>
      </form>
      {sent && <p className='contact-success'>Thank you! Your message has been received. We will reply to you by email.</p>}

      <h2>Report a problem</h2>
      <p>
        If a code is not finding the expected text, make sure the code was typed
        exactly as shared, including capital letters. For anything that still does
        not work, include the code and a short description of the problem in your
        message so we can investigate quickly.
      </p>
    </div>
  )
}

export default Contact
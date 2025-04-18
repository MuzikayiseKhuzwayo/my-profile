import '../css/Body.css'
import React, { useState } from 'react';

// Contact Section

function Contact(){
 const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  message: ''
 });
 const [submissionStatus, setSubmissionStatus] = useState('');

 const handleChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  // Simulate sending data to a backend service
  console.log('Form data submitted:', formData);

  // Simulate a successful submission
  setTimeout(() => {
   setSubmissionStatus('success');
  }, 1000); // Simulate a 1-second delay for sending
 };

 return(
  <section id="contact-section" className="all-sections Contact ">
   <div className="inner-container">
    <div className="container container-4 page-text">
     <h1>Let's Build Something Extraordinary Together</h1>
     <h3>If you’re ready to take your brand to the next level, message me. Together, we’ll create something that grows with you... Something that lasts.</h3>
     <form onSubmit={handleSubmit}>
     <label htmlFor="fullName">Full Name</label>
     <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
     <label htmlFor="email">Email</label>
     <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
     <label htmlFor="message">Message</label>
     <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Query..." required></textarea>
     <input type="submit" value="Submit >>" />
     </form>
     {submissionStatus === 'success' && (
     <div className="success-message">Thank you! Your message has been sent.</div>
    )}
     
    </div>
   </div>
  </section>
 )
}

export default Contact
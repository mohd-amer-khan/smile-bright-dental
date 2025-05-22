import { useState } from 'react';
import axios from 'axios';
import FAQ from '../components/FAQ';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then(response => {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(error => console.error('Error submitting form:', error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="contact-form-box">
            <h2>
              <span className="icon-circle me-2">
                <i className="bi bi-person"></i>
              </span>
              Get in Touch
            </h2>
            {submitted && <div className="alert alert-success">Form submitted successfully!</div>}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
              {errors.subject && <div className="form-error">{errors.subject}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="contact-info-box">
            <h2>Contact Information</h2>
            <p>
              <span className="icon-circle me-2">
                <i className="bi bi-telephone"></i>
              </span>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>
              <span className="icon-circle me-2">
                <i className="bi bi-envelope"></i>
              </span>
              <strong>Email:</strong> info@smilebrightdental.com
            </p>
            <p>
              <span className="icon-circle me-2">
                <i className="bi bi-geo-alt"></i>
              </span>
              <strong>Address:</strong> 123 Smile St, Dental City, DC 12345
            </p>
            <h3>
              <span className="icon-circle me-2">
                <i className="bi bi-geo-alt"></i>
              </span>
              Our Location
            </h3>
            <div className="map-box">
              <iframe
                title="Google Maps Location of SmileBright Dental"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019237237678!2d-122.4194156846813!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Contact;
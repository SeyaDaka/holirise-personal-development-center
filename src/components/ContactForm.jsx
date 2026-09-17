import React, { useState } from "react";
import { siteData } from "../data/siteData";

export default function ContactForm() {
  const { contact } = siteData;
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="alert alert-success d-flex align-items-center" role="alert">
        <i className="bi bi-check-circle-fill me-3 fs-4" aria-hidden="true"></i>
        <div>
          <strong>Message sent successfully!</strong>
          <p className="mb-0 mt-1">Thank you for reaching out. We will get back to you soon.</p>
        </div>
        <button className="btn-close ms-auto" onClick={() => setSubmitted(false)} aria-label="Close"></button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="c-name" className="form-label">Full Name <span className="text-danger">*</span></label>
          <input type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} id="c-name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="col-md-6">
          <label htmlFor="c-email" className="form-label">Email <span className="text-danger">*</span></label>
          <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="c-email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="col-md-6">
          <label htmlFor="c-phone" className="form-label">Phone <span className="text-danger">*</span></label>
          <input type="tel" className={`form-control ${errors.phone ? "is-invalid" : ""}`} id="c-phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+251 9XX XXX XXX" required />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <div className="col-md-6">
          <label htmlFor="c-subject" className="form-label">Subject <span className="text-danger">*</span></label>
          <select className={`form-select ${errors.subject ? "is-invalid" : ""}`} id="c-subject" name="subject" value={form.subject} onChange={handleChange} required>
            <option value="">Select a subject</option>
            {contact.subjects.map((s, i) => <option key={i} value={s}>{s}</option>)}
          </select>
          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
        </div>
        <div className="col-12">
          <label htmlFor="c-message" className="form-label">Message <span className="text-danger">*</span></label>
          <textarea className={`form-control ${errors.message ? "is-invalid" : ""}`} id="c-message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." required></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-lime btn-lg">
            Send Message <i className="bi bi-send ms-2" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

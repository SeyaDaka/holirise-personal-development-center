import React from "react";
import { siteData } from "../data/siteData";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { contact } = siteData;

  return (
    <section id="contact" className="contact-section section-padding" aria-labelledby="contact-heading">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5" data-animate="fade-up">
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="section-heading" id="contact-heading">{contact.heading}</h2>
            <p className="contact-text">{contact.description}</p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h6>Phone</h6>
                  {contact.phones.map((p, i) => (
                    <a key={i} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                  ))}
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">
                  <i className="bi bi-globe"></i>
                </div>
                <div>
                  <h6>Website</h6>
                  <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.websiteDisplay}</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h6>Address</h6>
                  <span>{contact.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-animate="fade-up" data-delay="200">
            <div className="contact-form-card">
              <h4 className="mb-4">Send Us a Message</h4>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

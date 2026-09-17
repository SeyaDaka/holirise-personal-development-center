import React from "react";
import { siteData } from "../data/siteData";

export default function About() {
  const { about } = siteData;

  return (
    <section id="about" className="about-section section-padding" aria-labelledby="about-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-animate="fade-up">
            <span className="section-label">{about.label}</span>
            <h2 className="section-heading" id="about-heading">{about.heading}</h2>
            <p className="about-text">{about.text}</p>
            <p className="about-text">{about.text2}</p>
          </div>

          <div className="col-lg-6" data-animate="fade-up" data-delay="200">
            <div className="about-features-grid">
              {about.features.map((feature, i) => (
                <div className="about-feature-card" key={i}>
                  <div className="about-feature-icon">
                    <i className={`bi ${feature.icon}`} aria-hidden="true"></i>
                  </div>
                  <h5 className="about-feature-title">{feature.title}</h5>
                  <p className="about-feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

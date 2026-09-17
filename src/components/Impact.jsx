import React from "react";
import { siteData } from "../data/siteData";

export default function Impact() {
  const { impact } = siteData;

  return (
    <section id="impact" className="impact-section section-padding" aria-labelledby="impact-heading">
      <div className="container">
        <div className="text-center mb-5" data-animate="fade-up">
          <span className="section-label">{impact.label}</span>
          <h2 className="section-heading" id="impact-heading">{impact.heading}</h2>
          <p className="section-subheading">
            {impact.description}
          </p>
        </div>

        <div className="row g-4">
          {impact.items.map((item, i) => (
            <div className="col-sm-6 col-lg-3" key={i} data-animate="fade-up" data-delay={i * 100}>
              <div className="impact-card">
                <div className="impact-card-icon" aria-hidden="true">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 className="impact-card-title">{item.title}</h5>
                <p className="impact-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

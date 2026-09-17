import React from "react";
import { siteData } from "../data/siteData";

export default function Values() {
  const { values } = siteData;

  return (
    <section id="values" className="values-section section-padding" aria-labelledby="values-heading">
      <div className="container">
        <div className="text-center mb-5" data-animate="fade-up">
          <span className="section-label label-lime">{values.label}</span>
          <h2 className="section-heading text-white" id="values-heading">{values.heading}</h2>
        </div>

        <div className="row g-4">
          {values.items.map((value, i) => (
            <div className="col-sm-6 col-lg-3" key={i} data-animate="fade-up" data-delay={i * 100}>
              <div className="value-card">
                <div className="value-card-icon" aria-hidden="true">
                  <i className={`bi ${value.icon}`}></i>
                </div>
                <h4 className="value-card-title">{value.title}</h4>
                <p className="value-card-desc">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { siteData } from "../data/siteData";

export default function Approach() {
  const { approach } = siteData;

  return (
    <section id="approach" className="approach-section section-padding" aria-labelledby="approach-heading">
      <div className="container">
        <div className="text-center mb-5" data-animate="fade-up">
          <span className="section-label">{approach.label}</span>
          <h2 className="section-heading" id="approach-heading">{approach.heading}</h2>
          <p className="section-subheading">{approach.description}</p>
        </div>

        <div className="approach-timeline">
          <div className="approach-line" aria-hidden="true"></div>
          <div className="row g-4">
            {approach.steps.map((step, i) => (
              <div className="col-sm-6 col-lg-3" key={i} data-animate="fade-up" data-delay={i * 120}>
                <div className="approach-step">
                  <div className="approach-step-circle" aria-hidden="true">
                    <span>{step.num}</span>
                  </div>
                  <h4 className="approach-step-title">{step.title}</h4>
                  <p className="approach-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

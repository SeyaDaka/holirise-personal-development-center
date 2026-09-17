import React from "react";
import { siteData } from "../data/siteData";

export default function Impact() {
  const { impact } = siteData;

  return (
    <section className="impact-section section-padding" aria-labelledby="impact-heading">
      <div className="container">
        <div className="text-center mb-5" data-animate="fade-up">
          <span className="section-label">COMMUNITY IMPACT</span>
          <h2 className="section-heading" id="impact-heading">Creating Lasting Change</h2>
          <p className="section-subheading">
            Our work creates meaningful impact across personal, professional and community dimensions.
          </p>
        </div>

        <div className="row g-4">
          {impact.map((item, i) => (
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

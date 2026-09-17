import React from "react";
import { siteData } from "../data/siteData";

export default function CTA() {
  const { cta } = siteData;

  const scrollTo = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="cta-section section-padding" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-card" data-animate="fade-up">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="cta-heading" id="cta-heading">{cta.heading}</h2>
              <p className="cta-text">{cta.text}</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <a href="#contact" className="btn btn-lime btn-lg cta-btn" onClick={scrollTo}>
                {cta.button} <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

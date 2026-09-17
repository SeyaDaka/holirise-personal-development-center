import React from "react";
import { siteData } from "../data/siteData";

export default function Vision() {
  const { vision } = siteData;

  return (
    <section className="vision-section section-padding" aria-labelledby="vision-heading">
      <div className="container">
        <div className="vision-card" data-animate="fade-up">
          <div className="row align-items-center g-4">
            <div className="col-lg-1 text-center">
              <div className="vision-icon-wrapper" aria-hidden="true">
                <i className={`bi ${vision.icon}`}></i>
              </div>
            </div>
            <div className="col-lg-11">
              <span className="section-label label-light">{vision.label}</span>
              <h2 className="vision-heading" id="vision-heading">{vision.heading}</h2>
              <p className="vision-text">{vision.text}</p>
              <blockquote className="vision-quote">
                <i className="bi bi-quote me-2" aria-hidden="true"></i>
                {vision.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

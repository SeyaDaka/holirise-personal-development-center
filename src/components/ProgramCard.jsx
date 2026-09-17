import React from "react";

export default function ProgramCard({ program, index }) {
  return (
    <article
      className="program-card"
      data-animate="fade-up"
      data-delay={index * 100}
      tabIndex="0"
      aria-label={`${program.title} program`}
    >
      <div className="program-card-icon" aria-hidden="true">
        <i className={`bi ${program.icon}`}></i>
      </div>
      <div className="program-card-number" aria-hidden="true">0{program.id}</div>
      <h4 className="program-card-title">{program.title}</h4>
      <p className="program-card-desc">{program.desc}</p>
      <a href="#contact" className="program-card-cta" aria-label={`Learn more about ${program.title}`}>
        {program.cta} <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
      </a>
    </article>
  );
}

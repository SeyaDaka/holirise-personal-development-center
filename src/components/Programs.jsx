import React from "react";
import { siteData } from "../data/siteData";
import ProgramCard from "./ProgramCard";

export default function Programs() {
  const { programs } = siteData;

  return (
    <section id="programs" className="programs-section section-padding" aria-labelledby="programs-heading">
      <div className="container">
        <div className="text-center mb-5" data-animate="fade-up">
          <span className="section-label">{programs.label}</span>
          <h2 className="section-heading" id="programs-heading">{programs.heading}</h2>
          <p className="section-subheading">{programs.description}</p>
        </div>

        <div className="row g-4">
          {programs.items.map((program, i) => (
            <div className="col-sm-6 col-lg-3" key={program.id}>
              <ProgramCard program={program} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

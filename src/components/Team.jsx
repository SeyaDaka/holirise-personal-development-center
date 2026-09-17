import React from "react";
import { siteData } from "../data/siteData";

export default function Team() {
  const { team } = siteData;

  return (
    <section id="team" className="team-section section-padding" aria-labelledby="team-heading">
      <div className="container">
        <div className="text-center mb-5" data-animate="fade-up">
          <span className="section-label">{team.label}</span>
          <h2 className="section-heading" id="team-heading">{team.heading}</h2>
          <p className="section-subheading">{team.description}</p>
        </div>

        <div className="row g-4">
          {team.members.map((member, i) => (
            <div className="col-sm-6 col-lg-3" key={member.name} data-animate="fade-up" data-delay={i * 100}>
              <article className="team-card" aria-label={`${member.name}, ${member.role}`}>
                <div className="team-avatar" aria-hidden="true">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="team-avatar-img" />
                  ) : (
                    <span>{member.initials}</span>
                  )}
                </div>
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-socials">
                  {member.socials.map((social, j) => (
                    <a
                      key={j}
                      href={social.url}
                      className="team-social-link"
                      aria-label={`${member.name} on ${social.label}`}
                      title={social.label}
                      target={social.url.startsWith("http") ? "_blank" : undefined}
                      rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <i className={`bi ${social.icon}`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

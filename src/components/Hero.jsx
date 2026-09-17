import React from "react";
import { siteData } from "../data/siteData";

export default function Hero() {
  const { hero } = siteData;

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-pattern" aria-hidden="true"></div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 hero-content" data-animate="fade-up">
            <span className="hero-label">
              <i className="bi bi-compass me-2" aria-hidden="true"></i>
              {hero.label}
            </span>
            <h1 className="hero-headline">
              {hero.headline.split(hero.highlightWord).map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && (
                    <span className="text-lime">{hero.highlightWord}</span>
                  )}
                </React.Fragment>
              ))}
            </h1>
            <p className="hero-text">{hero.text}</p>
            <div className="hero-buttons">
              <a
                href="#programs"
                className="btn btn-lime btn-lg"
                onClick={(e) => scrollTo(e, "#programs")}
              >
                {hero.primaryCta}{" "}
                <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light btn-lg"
                onClick={(e) => scrollTo(e, "#contact")}
              >
                {hero.secondaryCta}
              </a>
            </div>
            <div className="hero-stats" role="list" aria-label="Key highlights">
              {hero.stats.map((stat, i) => (
                <div className="hero-stat" key={i} role="listitem">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="col-lg-6 hero-visual"
            data-animate="fade-up"
            data-delay="200"
          >
            <div className="hero-card-wrapper">
              <div
                className="hero-card floating"
                role="img"
                aria-label="HOLIRISE Personal Development Center business card"
              >
                <img
                  src="/images/holirise-business-card.png"
                  alt="HOLIRISE Personal Development Center business card"
                  className="hero-card-img"
                  loading="eager"
                  width="460"
                  height="260"
                />
              </div>
              {hero.badges.map((badge, i) => (
                <div
                  className={`hero-badge hero-badge-${i}`}
                  key={i}
                  aria-hidden="true"
                >
                  <i
                    className={`bi bi-${i === 0 ? "star-fill" : "people-fill"} me-2`}
                  ></i>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator" aria-hidden="true">
        <a
          href="#about"
          onClick={(e) => scrollTo(e, "#about")}
          aria-label="Scroll to about section"
        >
          <i className="bi bi-chevron-double-down"></i>
        </a>
      </div>
    </section>
  );
}

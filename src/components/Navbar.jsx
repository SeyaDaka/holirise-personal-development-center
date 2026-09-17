import React, { useState, useEffect, useCallback } from "react";
import HoliriseLogo from "./HoliriseLogo";
import { siteData } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const sections = siteData.navLinks.map((l) => l.href.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection("#" + sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    const toggler = document.querySelector(".navbar-toggler");
    const collapse = document.querySelector(".navbar-collapse.show");
    if (collapse && toggler) toggler.click();
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "navbar-scrolled" : ""}`}
      id="mainNav"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => scrollTo(e, "#home")}>
          <HoliriseLogo size="small" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
            {siteData.navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link ${activeSection === link.href ? "active" : ""}`}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  aria-current={activeSection === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <a
                className="btn btn-lime btn-nav-cta"
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
              >
                Get Involved
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

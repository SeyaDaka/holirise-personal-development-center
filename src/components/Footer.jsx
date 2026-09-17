import React from "react";
import { siteData } from "../data/siteData";
import HoliriseLogo from "./HoliriseLogo";

export default function Footer() {
  const { organization, navLinks, footer } = siteData;

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-4">
            <HoliriseLogo className="footer-logo" size="default" />
            <p className="footer-desc">{footer.description}</p>
            <div className="footer-socials" aria-label="Social media links">
              {footer.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="footer-social-link"
                  aria-label={social.name}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bi ${social.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => scrollTo(e, link.href)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h5 className="footer-title">Contact</h5>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <i className="bi bi-telephone" aria-hidden="true"></i>
                <div>
                  {organization.phones.map((p, i) => (
                    <a key={i} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                  ))}
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-globe" aria-hidden="true"></i>
                <a href={organization.website} target="_blank" rel="noopener noreferrer">
                  {organization.website.replace("https://", "")}
                </a>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <span>{organization.address}</span>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <h5 className="footer-title">Programs</h5>
            <ul className="footer-links">
              <li><a href="#programs" onClick={(e) => scrollTo(e, "#programs")}>Personal Development</a></li>
              <li><a href="#programs" onClick={(e) => scrollTo(e, "#programs")}>Leadership & Teamwork</a></li>
              <li><a href="#programs" onClick={(e) => scrollTo(e, "#programs")}>Life Skills & Innovation</a></li>
              <li><a href="#programs" onClick={(e) => scrollTo(e, "#programs")}>Wellbeing & Flourishing</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p className="footer-copyright">
            Developed By <strong>Birhanu Asmerom</strong>
          </p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} HOLIRISE Personal Development Center. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

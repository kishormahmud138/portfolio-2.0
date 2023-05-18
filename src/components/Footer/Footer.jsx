import React from "react";
import "./Footer.css";
import Social from "../Home/Social";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Kishor</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer-link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer-link">
              Testimonials
            </a>
          </li>

          <li>
            <a href="#" className="footer-link"></a>
          </li>
        </ul>

        <div className="footer-social">
          <a href="" className="footer-social-icon" target="_blank">
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a href="" className="footer-social-icon" target="_blank">
            <i class="uil uil-facebook-f"></i>
          </a>
          <a href="" className="footer-social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer-copy">
          &#169; Kishor 2023 All right Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

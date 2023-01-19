import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newLogo.png";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ background: "rgba(35, 67, 17, 1)", padding: "70px 0" }}>
      <div className="container">
        <div className="footer-row">
          <div className="foot-col-1">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="socials">
              <Link to="/" className="social-link">
                <FaFacebookSquare className="social-links" />
              </Link>
              <Link to="/" className="social-link">
                <FaInstagramSquare className="social-links" />
              </Link>
              <Link to="/" className="social-link">
                <FaMailBulk className="social-links" />
              </Link>
              <Link to="/" className="social-link">
                <FaTwitter className="social-links" />
              </Link>
            </div>
            <div className="policy">
              <p>Privacy policy</p>
              <p>Terms & conditions</p>
            </div>
          </div>
          <div className="foot-col-2">
            <h4 className="footer-title">Helpful links</h4>
            <ul className="footer-ul">
              <li>
                <Link className="footer-link" to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/articles">
                  Articles
                </Link>
              </li>

              <li>
                <Link className="footer-link" to="/didYouKnow">
                  Did you know?
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/challenge">
                  Nutritional Challenge
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/restaurant">
                  Restaurant listings
                </Link>
              </li>
            </ul>
          </div>
          <div className="foot-col-3">
            <h4 className="footer-title">Get in touch</h4>
            <ul className="footer-ul">
              <li>
                <a href="mailto:info@intakes.ng" className="footer-link">
                  info@intakes.ng
                </a>
              </li>
              <li>
                <a href="tel:" className="footer-link">
                  08123456789
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col-4">
            <h4 className="footer-title">Follow us</h4>
            <ul className="footer-ul">
              <li>
                <Link className="footer-link" to="/about">
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/news">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/news">
                  Gmail
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/news">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

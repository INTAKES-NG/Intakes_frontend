import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/white-logo.png";

const Footer = () => {
  const footerLinks = [
    {
      title: "Helpful links",
      links: [
        {
          name: "Restaunrant listings",
          link: "/",
        },
        {
          name: "Did you know?",
          link: "/",
        },
        {
          name: "About us",
          link: "/",
        },
        {
          name: "News",
          link: "/",
        },
      ],
    },
    {
      title: "Get in touch",
      links: [
        {
          name: "email@gmail.com",
          link: "",
        },
        {
          name: "0812356179",
          link: "",
        },
      ],
    },
    {
      title: "Follow us",
      links: [
        {
          name: "Facebook",
          link: "/",
        },
        {
          name: "Instagram",
          link: "/",
        },
        {
          name: "Gmail",
          link: "/",
        },
        {
          name: "Twitter",
          link: "/",
        },
      ],
    },
  ];

  const mappedLink = footerLinks.map((footerLink) => {
    return (
      <div key={footerLink.title}>
        <h4 className="footer-title">{footerLink.title}</h4>
        <ul className="">
          {footerLink.links.map((lnk, id) => {
            return (
              <li key={lnk.name} className="footer-ul">
                <Link to={lnk.link} className='footer-link'>{lnk.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
  return (
    <footer style={{ background: "rgba(35, 67, 17, 1)", padding: "70px 0" }}>
      <div className="container">
        <div className="footer-row">
          <div className="footer-col-1">
            <img src={logo} alt="" />
            <div className="row footer-col-1-row">
              <div>jj</div>
              <div>jj</div>
              <div>jj</div>
              <div>jj</div>
            </div>
            <div className="row footer-col-1-row">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
          <div className="footer-col-2">{mappedLink}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

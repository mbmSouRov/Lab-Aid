import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <div style={{ background: `url(${bgImg})` }}>
      <footer className="footer p-10 text-base-content">
        <div>
          <span className="footer-title uppercase">Services</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title uppercase">Oral Health</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title uppercase">Our Address</span>
          <Link className="link link-hover">Dholairpar 3rd Lane</Link>
        </div>
      </footer>
      <footer className="footer footer-center text-base-content pb-5">
        <div>
          <p>
            Copyright © 2022
            <br />
            All right reserved by Lab Aid
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

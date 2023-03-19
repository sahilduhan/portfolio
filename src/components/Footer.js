import React from "react";
import { Icon } from "@iconify/react";
export const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <h3>SAHIL DUHAN</h3>
          <p>DREAM, BELIVE, ACHIEVE</p>
          <div className="social-links">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/sahildu26064579"
              className="twitter"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/sahilduhan.exe/"
              className="instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/sahilduhan"
              className="google-plus"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/sahilduhan16/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            {/* <a rel="noreferrer" target="_blank" href="https://www.codechef.com/users/sahilduhan1609" className="linkedin"><Icon icon="simple-icons:codechef" /></a> */}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://leetcode.com/sahilduhan/"
              className="linkedin"
            >
              <Icon icon="simple-icons:leetcode" />
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span></span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="https://www.linkedin.com/in/sahilduhan16/">Sahil Duhan </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

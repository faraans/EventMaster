import React from "react";

export const Footer = () => {
  return (
    <div className="footer-section">
      <div class="grey-line"></div>
      <div className="container-grey">
        <div className="footer-container">
          <div class="footer-left-flex">
            <h6 class="footer-h5">CONTACT</h6>
            <div class="footer-line"></div>
            <div class="footer-number">
              647-786-6367
              <p></p>
              <a
                href="http://mail:eventmaster@gmail.com"
                target="_blank"
                class="link"
              >
                eventmaster@gmail.com
              </a>
            </div>
          </div>
        </div>
        <p class="footer-text">
          © Copyright 2023. EventMaster. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

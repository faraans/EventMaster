import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Services = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className="w-5/6 mx-auto">
        <div className="main-container">
          <p className="m-10">
            EventMaster is a full service event management firm based in
            Toronto, Ontario that was created by pairing together our passion
            for business and events. We bring a fresh, unique approach to the
            event management industry.
          </p>
          <section className="banner-1">
            <div className="wrapper">
              <h2 className="section-title"></h2>
              <p></p>
            </div>
          </section>
          <h1 className="pt-10 w-auto mx-auto text-center">Our Packages</h1>
          <div className="service">
            <div className="service-item">
              <div>
                <h3 className="service-header">
                  <a href="/full-wedding">FULL WEDDING PLANNING + DESIGN</a>
                </h3>
                <p className="paragraph-3">Western Weddings</p>
                <p className="paragraph-3">South-Asian Weddings</p>
                <p className="paragraph-3">Jewish Weddings</p>
              </div>
            </div>
            <div className="service-item">
              <div>
                <h3 className="service-header">
                  <a href="/micro-wedding">
                    CORPORATE EVENT PLANNING + MANAGEMENT
                  </a>
                </h3>
                <p className="paragraph-3">Charity Galas</p>
                <p className="paragraph-3">Fashion Shows</p>
                <p className="paragraph-3">Concerts</p>
              </div>
            </div>
            <div className="service-item">
              <div>
                <h3 className="service-header">
                  <a href="/social-event">SOCIAL EVENT PLANNING + DESIGN</a>
                </h3>
                <p className="paragraph-3">Bar Mitzvahs + Bat Mitzvahs</p>
                <p className="paragraph-3">Baby Showers</p>
                <p className="paragraph-3">Birthday Parties</p>
                <p className="paragraph-3">Graduation Parties</p>
                <p className="paragraph-3">Bachelorette/Bachelor Parties</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

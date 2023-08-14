import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Blog = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="blog">
        <div className="blog-box">
          <a href="/services/" class="blog-thumbnail w-inline-block">
            <img className="blog-image" src="src/assets/img2.jpg" />
          </a>
          <div className="content-container">
            <a href="/services/" class="w-inline-block">
              <h2 class="blog-title">
                5 Cool perks of Hiring a Wedding Planner in Toronto{" "}
              </h2>
            </a>
            <p class="blog-description">
              Congratulations! You are engaged! Now you have wedding on your
              hands to plan. You both have worked to settle on a number. You
              also have decided on a date for your event...
            </p>
            <a href="/services/" class="blog-button w-button">
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="blog-box">
          <a href="/services/" class="blog-thumbnail w-inline-block">
            <img className="blog-image" src="src/assets/img3.jpg" />
          </a>
          <div className="content-container">
            <a href="/services/" class="w-inline-block">
              <h2 class="blog-title">
                Event Horizon: Unveiling Trends & Traditions{" "}
              </h2>
            </a>
            <p class="blog-description">
              Welcome to Event Horizon, your source for staying in the know
              about event planning trends and time-honored traditions. Explore
              the delicate balance of incorporating modern elements while
              respecting classic customs, and learn how to weave them seamlessly
              into your celebrations...
            </p>
            <a href="/services/" class="blog-button w-button">
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="blog-box">
          <a href="/services/" class="blog-thumbnail w-inline-block">
            <img className="blog-image" src="src/assets/img4.jpg" />
          </a>
          <div className="content-container">
            <a href="/services/" class="w-inline-block">
              <h2 class="blog-title">
                Rustic Rendezvous: Embracing Simple Charm{" "}
              </h2>
            </a>
            <p class="blog-description">
              Join us at Rustic Rendezvous as we celebrate the beauty of simple,
              charming gatherings. Explore rustic-inspired decor, wholesome
              cuisine, and outdoor event ideas that embrace the natural world
              and create an atmosphere of genuine warmth and camaraderie....
            </p>
            <a href="/services/" class="blog-button w-button">
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;

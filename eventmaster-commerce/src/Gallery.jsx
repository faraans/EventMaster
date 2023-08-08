import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Gallery = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section>
        <div class="container">
          <a>
            <img src="src/assets/wedding.jpeg" />
          </a>
          <a class="vertical">
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a class="horizontal">
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a>
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a>
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a class="big">
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a>
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a class="vertical">
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a>
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a class="horizontal">
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a>
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a class="big">
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a img="https://source.unsplash.com/600x600/?sig=56">
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a class="horizontal">
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a>
            <img src="src/assets/wedding.jpeg" />
          </a>

          <a className="horizontal">
            <img src="src/assets/wedding.jpeg" />
          </a>
          <a>
            <img src="src/assets/wedding.jpeg" />
          </a>
          <a>
            <img src="src/assets/wedding.jpeg" />
          </a>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

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
            <img src="src/assets/wedding1.jpeg" />
          </a>
          <a class="vertical">
            <img src="src/assets/wedding2.jpg" />
          </a>

          <a class="horizontal">
            <img src="src/assets/event1.jpg" />
          </a>

          <a>
            <img src="src/assets/event6.jpg" />
          </a>

          <a>
            <img src="src/assets/wedding3.jpg" />
          </a>

          <a class="big">
            <img src="src/assets/event5.jpg" />
          </a>

          <a>
            <img src="src/assets/wedding2.jpg" />
          </a>

          <a class="vertical">
            <img src="src/assets/wedding2.jpg" />
          </a>

          <a>
            <img src="src/assets/event2.jpg" />
          </a>

          <a class="horizontal">
            <img src="src/assets/event7.jpg" />
          </a>

          <a>
            <img src="src/assets/wedding6.jpg" />
          </a>

          <a class="big">
            <img src="src/assets/wedding5.jpg" />
          </a>

          <a>
            <img src="src/assets/wedding5.jpg" />
          </a>

          <a class="horizontal">
            <img src="src/assets/event3.jpg" />
          </a>

          <a>
            <img src="src/assets/event4.jpg" />
          </a>

          <a className="horizontal">
            <img src="src/assets/wedding4.jpg" />
          </a>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

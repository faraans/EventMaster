import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Events = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section>
        <div className="main-container"></div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Events;

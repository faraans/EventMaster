import { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-page-container">
        <h1 className="font-extrabold pt-10 w-auto mx-auto text-center">
          Your Partner in Crafting Unforgettable Events!
        </h1>
        <p className="m-10">
          EventMaster is a full service event management firm based in Toronto,
          Ontario that was created by pairing together our passion for business
          and events. We bring a fresh, unique approach to the event management
          industry.
        </p>
      </div>
      <section className="banner-1">
        <div className="wrapper">
          <h2 className="section-title font-extrabold"></h2>
          <p></p>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="section-title font-extrabold">Some content here</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum,
            perspiciatis a illo veniam ratione expedita assumenda laboriosam
            modi error maiores fugit soluta vitae temporibus voluptatum ducimus
            culpa similique quaerat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum,
            perspiciatis a illo veniam ratione expedita assumenda laboriosam
            modi error maiores fugit soluta vitae temporibus voluptatum ducimus
            culpa similique quaerat?
          </p>
        </div>
      </section>
      <section className="banner-2">
        <div className="wrapper">
          <h2 className="section-title font-extrabold"></h2>
          <p></p>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="section-title font-extrabold">Some content here</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum,
            perspiciatis a illo veniam ratione expedita assumenda laboriosam
            modi error maiores fugit soluta vitae temporibus voluptatum ducimus
            culpa similique quaerat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum,
            perspiciatis a illo veniam ratione expedita assumenda laboriosam
            modi error maiores fugit soluta vitae temporibus voluptatum ducimus
            culpa similique quaerat?
          </p>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;

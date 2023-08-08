import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Meeting = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-page-container">
        <h1 className="pt-10 w-auto mx-auto text-center">Contact Us</h1>
        <form>
          <label htmlFor="first">First Name</label>
          <input
            type="text"
            id="first"
            name="firstname"
            placeholder="Your first name..."
          ></input>
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="last"
            name="lastname"
            placeholder="Your last name..."
          ></input>
          <label for="type_of_service">
            What kind of services are you interested in?
          </label>
          <select id="city" name="city">
            <option value="wedding">Full Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="social">Social Event</option>
            <option value="unknown">I'm not sure</option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Meeting;

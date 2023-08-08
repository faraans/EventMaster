import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Gallery } from "./Gallery.jsx";
import { Services } from "./Services.jsx";
import Events from "./Events.jsx";
import Meeting from "./Meeting.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Full_Wedding } from "./Packages/Full_Wedding.jsx";
import Success from "./Success.jsx";
import { Social_Event } from "./Packages/Social_Event";
import Cancel from "./Cancel.jsx";
import { Corporate_Event } from "./Packages/Corporate_Event";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path={"/"} Component={App}></Route>
      <Route path={"/services"} Component={Services}></Route>
      <Route path={"/gallery"} Component={Gallery}></Route>
      <Route path={"/events"} Component={Events}></Route>
      <Route path={"/meeting"} Component={Meeting}></Route>
      <Route path={"/full-wedding"} Component={Full_Wedding}></Route>
      <Route path={"/corporate-event"} Component={Corporate_Event}></Route>
      <Route path={"/social-event"} Component={Social_Event}></Route>
      <Route path={"/success"} Component={Success}></Route>
      <Route path={"/cancel"} Component={Cancel}></Route>
    </Routes>
  </Router>
);

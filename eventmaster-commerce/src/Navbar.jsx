import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBurger, setBurger] = useState(true);
  return (
    <nav className="">
      <a href="/" className="logo">
        EventMaster
      </a>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <ul>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/meeting">Set Up A Meeting</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/faraan-siddiqui-6b8480190/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/faraan-siddiqui-6b8480190/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/faraan-siddiqui-6b8480190/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        {showBurger && <button className="burger" onClick={() => { setShowMenu(!showMenu); setBurger(!showBurger)}}>
          <MenuIcon />
        </button>}
      </ul>
      {showMenu && (
        <div className="sidebar">
          <button className="burger-sidebar" onClick={() => {setShowMenu(!showMenu); setBurger(!showBurger)}}>
            <CloseIcon />
          </button>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/meeting">Set Up A Meeting</a>
          </li>
        </div>
      )}
    </nav>
  );
};

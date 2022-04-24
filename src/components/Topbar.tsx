import React, { useState, useEffect } from "react";
import AboutStyle from "../styles/About.module.scss";
import logo from "../assets/phillips.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faVolleyball,
  faBook,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Topbar = () => {
  const [topbar, setTopbar]: any = useState("showBar");
  let prevScroll = window.pageYOffset;
  window.addEventListener("scroll", handleScroll, { passive: true });
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  function handleScroll() {
    var currentScrollPos = window.pageYOffset;
    if (prevScroll < currentScrollPos) {
      setTopbar("noShowBar");
    } else {
      setTopbar("showBar");
    }
    prevScroll = currentScrollPos;
  }

  return (
    <div className={`${AboutStyle.topbar} ${AboutStyle[topbar]}`}>
      <div className={`${AboutStyle.titleLogo}`}>
        {/* <span className={AboutStyle.title}>Phillips Halim</span> */}
        <img className={AboutStyle.logo} src={logo}></img>
      </div>
      <div className={AboutStyle.nav}>
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={AboutStyle.socials}>
        <FontAwesomeIcon id={AboutStyle.book} icon={faGithub} size={"2x"} />
        <FontAwesomeIcon id={AboutStyle.book} icon={faLinkedin} size={"2x"} />
        <FontAwesomeIcon id={AboutStyle.book} icon={faEnvelope} size={"2x"} />
      </div>
    </div>
  );
};

export default Topbar;

import { useEffect } from "react";
import AboutStyle from "../styles/Experience.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spotifyImg from "../assets/projects/spotify4.png";
import homerbotImg from "../assets/projects/homerbot.png";
import memoryImg from "../assets/projects/memory-game.png";
import knowledgeImg from "../assets/projects/knowledge.png";
import keebieImg from "../assets/projects/keebie-cut.png";
import goodstocksImg from "../assets/projects/goodstocks3.png";
import deviceImg from "../assets/projects/device-timeline2.png";

import {
  faVolleyball,
  faBook,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {

  return (
    <div className={AboutStyle.experience}>
      <h2>What I've Done</h2>
      <div className={AboutStyle.experienceContainer}>
        <div className={`${AboutStyle.experienceItem} ${AboutStyle.textItem}`}>
          <div>
            <h3>Check out all my work.</h3>
            <p>Projects I've done and had the enjoyment of making.</p>
          </div>
        </div>
        <div className={AboutStyle.experienceItem}>
          <img className={AboutStyle.projectImg} src={spotifyImg}></img>
        </div>
        <div>
          <img className={AboutStyle.projectImg} src={knowledgeImg}></img>
        </div>
        <div>
          <img className={AboutStyle.projectImg} src={homerbotImg}></img>
        </div>
        <div>
          <img className={AboutStyle.projectImg} src={memoryImg}></img>
        </div>
        <div>
          <img className={AboutStyle.projectImg} src={keebieImg}></img>
        </div>
        <div>
          <img className={AboutStyle.projectImg} src={goodstocksImg}></img>
        </div>
        <div>
          <img className={AboutStyle.projectImg} src={deviceImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Experience;

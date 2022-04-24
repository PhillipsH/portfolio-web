import AboutStyle from "../styles/About.module.scss";
import AboutImage from "../assets/about-image.svg";
import Technologies from "./Technologies";
import Experience from "./Experience";
import SelfCards from "./SelfCards";
import Skills from "./Skills";
import Self from "./Self";
import background from "../assets/circle-scatter-haikei.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={AboutStyle.aboutPage}>
      <div className={AboutStyle.aboutContent}>
        <div className={AboutStyle.aboutSummary}>
          <h1>
            Hello, <br></br>I'm Phillips Halim
          </h1>
          <h3>Software Developer</h3>
          <div className={AboutStyle.aboutText}>
            <p>Lets work together and make a great team!</p>
          </div>
          <div className={AboutStyle.chatButtonContainer}>
            <a className={AboutStyle.chatButton}>Lets Chat!</a>
            <a id={AboutStyle.resumeButton} className={AboutStyle.chatButton}>
              Resume
            </a>
          </div>
        </div>
        <img src={AboutImage} className={AboutStyle.aboutImage}></img>
        <div className={AboutStyle.aboutSummary}></div>
      </div>

      <div className={AboutStyle.info}>
        <div className={AboutStyle.firstSection}>
          <Self></Self>
          <SelfCards></SelfCards>
        </div>

        <div className={AboutStyle.secondSection}>
          <Skills></Skills>
          <Technologies></Technologies>
        </div>
        <div className={AboutStyle.thirdSection}>
          <Link to="/works">
            {/* <Experience></Experience> */}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default About;

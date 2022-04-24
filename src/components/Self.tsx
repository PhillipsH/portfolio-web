import AboutStyle from "../styles/Self.module.scss";
import AboutImage from "../assets/about-image.svg";
import Technologies from "./Technologies";
import Experience from "./Experience";
import SelfCards from "./SelfCards";
import Skills from "./Skills";
import profile from "../assets/profile.jpg";

const Self = () => {
  return (
    <div className={AboutStyle.self}>
      <div className={AboutStyle.selfText}>
        <h2>Who I am</h2>
        {/* <p className={AboutStyle.description}>A bit of my background.</p> */}
      </div>
      <div className={AboutStyle.selfMain}>
        <div className={AboutStyle.selfImageContainer}>
          <img className={AboutStyle.profileImg} src={profile}></img>
        </div>
        <div className={AboutStyle.profileContent}>
          Hi, I'm a recent graduate from British Columbia Institute of
          Technology with a Computer Systems Degree as well as taking part time
          software development courses in 2021. I started programming in
          highschool because of a programming course I took and fell in love
          with it since. I just can't seem to get enough of the logic puzzles and
          problem-solving software developers face daily.
        </div>
      </div>
    </div>
  );
};
export default Self;

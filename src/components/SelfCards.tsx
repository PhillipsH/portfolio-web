import AboutStyle from "../styles/Self.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faVolleyball,
  faBook,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const SelfCards = () => {
  return (
    <div className={AboutStyle.selfCardsContainer}>
      <div className={AboutStyle.selfCard}>
        <FontAwesomeIcon id={AboutStyle.book} icon={faBook} size={"4x"} />
        <h3>Learn</h3>
        <p>
          I strive to learn whatever I can whether its new a sport like
          volleyball, building keyboards or working with a Raspberry Pi.
        </p>
      </div>
      <div className={AboutStyle.selfCard}>
        <FontAwesomeIcon id={AboutStyle.code} icon={faCode} size={"4x"} />
        <h3>Software Development</h3>
        <p>
          Software Development is my passion, I enjoy creating all kinds of projects and solutions with code. 
        </p>
      </div>
      <div className={AboutStyle.selfCard}>
        <FontAwesomeIcon id={AboutStyle.volleyball}icon={faVolleyball} size={"4x"} />
        <h3>Hobbies or Interests</h3>
        <p>
          I recently started playing Volleyball its been something I've been
          having a lot of fun in, its incredibly rewarding when you get in a
          good rally with each other.
        </p>
      </div>
    </div>
  );
};

export default SelfCards;

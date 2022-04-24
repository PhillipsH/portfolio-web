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
        <FontAwesomeIcon
          id={AboutStyle.volleyball}
          icon={faVolleyball}
          size={"4x"}
        />
        <h3>Back-End Development</h3>
        <p>
          Having done professional and projects with back-end technologies such
          as Node.js with Express.js I can provide you with my knowledge in
          these areas. As well as experience in an array of different database.
        </p>
      </div>
      <div className={AboutStyle.selfCard}>
        <FontAwesomeIcon id={AboutStyle.code} icon={faCode} size={"4x"} />
        <h3>Software Development</h3>
        <p>
          Software Development is my passion, I enjoy creating all kinds of
          projects and solutions with code. Creating solutions to your software
          needs is what I do.
        </p>
      </div>
      <div className={AboutStyle.selfCard}>
        <FontAwesomeIcon id={AboutStyle.book} icon={faBook} size={"4x"} />
        <h3>Front-End Development</h3>
        <p>
          With experience in technologies like React, Typescript/Javascript and
          BootStrap I can create web applications based on any of your needs.
        </p>
      </div>
    </div>
  );
};

export default SelfCards;

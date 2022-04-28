import { useEffect } from "react";
import WorksStyle from "../styles/Works.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import spotifyImg from "../assets/projects/spotify.png";
import homerbotImg from "../assets/projects/homerbot.png";
import memoryImg from "../assets/projects/memory-game.png";
import knowledgeImg from "../assets/projects/knowledge.png";
import keebieImg from "../assets/projects/keebie.png";
import goodStocksImg from "../assets/projects/goodstocks.png";

// import spotifyImg from "../assets/projects/spotify4.png";
// import spotifyImg from "../assets/projects/spotify4.png";

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={WorksStyle.works}>
      <h1>Work Experience</h1>
      <div className={`${WorksStyle.projectWrapper}`}>
        <div className={`${WorksStyle.workSection}`}>
          <div className={`${WorksStyle.project} ${WorksStyle.right}`}>
            <div className={WorksStyle.imageContainer}>
              <img className={WorksStyle.projectImg} src={homerbotImg}></img>
            </div>
            <div className={WorksStyle.projectDescription}>
              <h2>Domomi Rentals</h2>
              <p className={WorksStyle.projectText}>
                I started working in Domomi Rentals from the BCIT cooperative
                project. During that, me along with three other classmates were
                tasked with creating a chatbot for renters in Vancouver. I
                worked with the Slack API as well as Dialogflow to create the
                chatbot. After the semester was over, Domomi Rentals brought me
                along to intern for them where I created a webscraper. The
                webscraper then scraped rental listings from websites like
                Kijiji and Craigslist and updated them to a database. I also
                created a recommendation system for users of the app based on
                what they found important to be near such as a grocery store or
                school.
              </p>
              <ul className={WorksStyle.technologies}>
                <li>Javascript</li>
                <li>Python</li>
                <li>Express.js</li>
                <li>Scrapy</li>
                <li>PostgreSQL</li>
              </ul>
              <div className={WorksStyle.links}>
                <a href="https://www.innovatebc.ca/blog/homer-gets-renters-talking-with-support-of-isi-student-grants/">
                  <FontAwesomeIcon
                    className={WorksStyle.linkIcon}
                    icon={faArrowUpRightFromSquare}
                    size={"2x"}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1>Projects</h1>
      <div className={WorksStyle.projectContainer}>
        <div className={WorksStyle.projectWrapper}>
          <div className={`${WorksStyle.workSection}`}>
            <div
              className={`${WorksStyle.project}`}
              style={{ background: "#eef3f6" }}
            >
              <div className={WorksStyle.imageContainer}>
                <img className={WorksStyle.projectImg} src={spotifyImg}></img>
              </div>
              <div className={WorksStyle.projectDescription}>
                <h2>SpotifyToolbox</h2>
                <p className={WorksStyle.projectText}>
                  SpotifyToolbox is a side project that I created because I was
                  in need of certain tools Spotify didn't provide, so I created
                  a website that automated features I needed. An example of this
                  is removing duplicate songs from your saved songs, or creating
                  a playlist based on songs released in a certain decade or
                  genre. I built this usings Spotify's API to authenticate and
                  request the data that I needed. Then the data was manipulated
                  to create genre based playlists, remove duplicates or save
                  songs you added to a playlist but forgot to save.
                </p>
                <ul className={WorksStyle.technologies}>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Typescript</li>
                  <li>Express.js</li>
                  <li>Microsoft Azure</li>
                </ul>
                <div className={WorksStyle.links}>
                  <a href="https://github.com/PhillipsH/SpotifyToolbox">
                    <FontAwesomeIcon
                      className={WorksStyle.linkIcon}
                      icon={faGithub}
                      size={"2x"}
                    />
                  </a>
                  <a href="https://spotifytoolbox.com">
                    <FontAwesomeIcon
                      className={WorksStyle.linkIcon}
                      icon={faArrowUpRightFromSquare}
                      size={"2x"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={WorksStyle.projectWrapper}>
          <div className={`${WorksStyle.workSection} ${WorksStyle.right}`}>
            <div className={`${WorksStyle.project}`}>
              <div className={WorksStyle.imageContainer}>
                <img
                  className={WorksStyle.projectImg}
                  src={goodStocksImg}
                ></img>
              </div>
              <div className={WorksStyle.projectDescription}>
                <h2>GoodStocks</h2>
                <p className={WorksStyle.projectText}>
                  GoodStocks is a forum me and three other classmates created
                  for our Software Engineering course (COMP 7082). We wanted to
                  create a forum where each Stock had its own forum. Users Could
                  Comment, reply or like other peoples comments. I worked on the
                  Back-End which was written in JavaScript using Express.js.
                  There I handled when users liked, commented or replied as well
                  as created their accounts. This was all stored in a PostgreSQL
                  database.
                </p>
                <ul className={WorksStyle.technologies}>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                  <li>Jenkins</li>
                </ul>
                <div className={WorksStyle.links}>
                  <a href="https://github.com/PhillipsH/GoodStocks/">
                    <FontAwesomeIcon
                      className={WorksStyle.linkIcon}
                      icon={faGithub}
                      size={"2x"}
                    />
                  </a>
                  <a href="https://web-good-stocks.herokuapp.com/">
                    <FontAwesomeIcon
                      className={WorksStyle.linkIcon}
                      icon={faArrowUpRightFromSquare}
                      size={"2x"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={WorksStyle.projectWrapper}>
          <div className={`${WorksStyle.workSection} ${WorksStyle.left}`}>
            <div
              className={`${WorksStyle.project}`}
              style={{ background: "#eef3f6" }}
            >
              <div className={WorksStyle.imageContainer}>
                <img className={WorksStyle.projectImg} src={keebieImg}></img>
              </div>
              <div className={WorksStyle.projectDescription}>
                <h2>Keebie.io</h2>
                <p className={WorksStyle.projectText}>
                  One of my hobbies is building keyboards so I wanted to create
                  a project that had something to do with that. I created
                  Keebie.io to list popular keyboard switches and display their
                  details such as whether they are clicky, tactile or linear
                  switches. I created Keebie.io in JavaScript with React for the
                  Front-End as well as Redux to store the state. The Back-End
                  was created using Express.js where it would make calls to the
                  MongoDB database.
                </p>
                <ul className={WorksStyle.technologies}>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                </ul>
                <div className={WorksStyle.links}>
                  <a href="https://github.com/PhillipsH/keebie">
                    <FontAwesomeIcon
                      className={WorksStyle.linkIcon}
                      icon={faGithub}
                      size={"2x"}
                    />
                  </a>
                  <a href="https://keebie.herokuapp.com/">
                    <FontAwesomeIcon
                      className={WorksStyle.linkIcon}
                      icon={faArrowUpRightFromSquare}
                      size={"2x"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={WorksStyle.projectWrapper}>
          <div className={`${WorksStyle.workSection} ${WorksStyle.right}`}>
            <div
              className={`${WorksStyle.project}`}
              style={{ background: "#f1e7e7" }}
            >
              <div className={WorksStyle.imageContainer}>
                <img className={WorksStyle.projectImg} src={knowledgeImg}></img>
              </div>
              <div className={WorksStyle.projectDescription}>
                <h2>KnowledgeBase</h2>
                <p className={WorksStyle.projectText}>
                  KnowledgeBase was a social media app I created to share
                  technical knowledge to others users. Users could create posts,
                  private message others, view other users posts.
                </p>
                <ul className={WorksStyle.technologies}>
                  <li>Javascript</li>
                  <li>MySQL</li>
                  <li>HTML/CSS</li>
                  <li>AWS</li>
                </ul>
                <div className={WorksStyle.links}>
                  <a href="https://github.com/PhillipsH/KnowledgeBase">
                    <FontAwesomeIcon
                      className={WorksStyle.linkIcon}
                      icon={faArrowUpRightFromSquare}
                      size={"2x"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={WorksStyle.projectWrapper}>
          <div className={`${WorksStyle.workSection} ${WorksStyle.left}`}>
            <div
              className={`${WorksStyle.project}`}
              style={{ background: "#d5e2f7" }}
            >
              <div className={WorksStyle.imageContainer}>
                <img className={WorksStyle.projectImg} src={memoryImg}></img>
              </div>
              <div className={WorksStyle.projectDescription}>
                <h2>Memory Game</h2>
                <p className={WorksStyle.projectText}>
                  This Memory Game was just a fun and simple game I made for one
                  of my first web projects.
                </p>
                <ul className={WorksStyle.technologies}>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Handlebars.js</li>
                  <li>Heroku</li>
                </ul>
                <div className={WorksStyle.links}>
                  <a href="https://github.com/PhillipsH/MemoryGame">
                    <FontAwesomeIcon
                      className={WorksStyle.linkIcon}
                      icon={faGithub}
                      size={"2x"}
                    />
                  </a>
                  <a href="https://webmemorygame.herokuapp.com">
                    <FontAwesomeIcon
                      className={WorksStyle.linkIcon}
                      icon={faArrowUpRightFromSquare}
                      size={"2x"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

import ContactStyle from "../styles/Contact.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import toast, { Toaster } from "react-hot-toast";

const Experience = () => {
  /*
  Creates the toast popup whhen users clicks the copy email button.
  */
  const email = "phillipshalim@gmail.com";
  const notify = () => toast.success("E-mail Copied!");

  return (
    <div className={ContactStyle.contact}>
      <div className={ContactStyle.contactBox}>
        <div className={ContactStyle.socials}>
          <a className={ContactStyle.socialItem}href={"https://github.com/phillipsh"}>
            <FontAwesomeIcon
              className={ContactStyle.social}
              icon={faGithub}
              size={"2x"}
            />
          </a>
          <a className={ContactStyle.socialItem}href={"https://www.linkedin.com/in/phillips-halim/"}>
            <FontAwesomeIcon
              className={ContactStyle.social}
              icon={faLinkedin}
              size={"2x"}
            />
          </a>
          <a className={ContactStyle.socialItem}href="mailto:phillipshalim@gmail.com">
            <FontAwesomeIcon
              className={ContactStyle.social}
              icon={faEnvelope}
              size={"2x"}
            />
          </a>
        </div>
        <div className={ContactStyle.emailBox}>
          <div>
            <p>Just shoot me an email to get in contact with me.</p> <br></br>
            <h2 className={ContactStyle.email}>phillipshalim@gmail.com</h2>
            <button
              className={ContactStyle.copyButton}
              onClick={() => {
                navigator.clipboard.writeText(email);
                notify();
              }}
            >
              Copy Email
            </button>
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    background: "green",
                  },
                },
                error: {
                  style: {
                    background: "red",
                  },
                },
              }}
            ></Toaster>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

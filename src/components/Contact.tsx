import ContactStyle from "../styles/Contact.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import toast, { Toaster } from "react-hot-toast";

const Experience = () => {
  const email = "phillipshalim@gmail.com";
  const notify = () => toast.success("E-mail Copied!");

  return (
    <div className={ContactStyle.contact}>
      <div className={ContactStyle.contactBox}>
        <div className={ContactStyle.socials}>
          <div className={ContactStyle.socialItem}>
            <FontAwesomeIcon
              id={ContactStyle.book}
              icon={faGithub}
              size={"2x"}
            />
          </div>
          <div className={ContactStyle.socialItem}>
            <FontAwesomeIcon
              id={ContactStyle.book}
              icon={faLinkedin}
              size={"2x"}
            />
          </div>
          <div className={ContactStyle.socialItem}>
            <FontAwesomeIcon
              id={ContactStyle.book}
              icon={faEnvelope}
              size={"2x"}
            />
          </div>
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

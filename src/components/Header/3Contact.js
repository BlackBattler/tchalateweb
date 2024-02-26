import "../../styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faMobileScreenButton,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Info Contact
export default function HeaderContact() {
  return (
    <div className="divContact">
      <p>
        Lundi - Vendredi <FontAwesomeIcon icon={faCalendar} />
      </p>
      <p>
        08:00 - 17:00
        <FontAwesomeIcon icon={faClock} />
      </p>
      <p>
        07 81 86 01 49 <FontAwesomeIcon icon={faMobileScreenButton} />
      </p>
      <p>
        <a href="mailto:coquin.jean-michel@tchalate.com">Nous contacter</a>
        <FontAwesomeIcon icon={faEnvelope} />
      </p>
    </div>
  );
}

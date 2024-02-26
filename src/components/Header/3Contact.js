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
        <FontAwesomeIcon icon={faCalendar} /> Lundi - Vendredi
      </p>
      <p>
        <FontAwesomeIcon icon={faClock} /> 08:00 - 17:00
      </p>
      <p>
        <FontAwesomeIcon icon={faMobileScreenButton} /> 07 81 86 01 49
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />{" "}
        <a href="mailto:coquin.jean-michel@tchalate.com">
          coquin.jean-michel@tchalate.com
        </a>
      </p>
    </div>
  );
}

import "../styles/header.scss";
import { Link } from "react-router-dom";

// Navbar for header
export default function Nav() {
  // Get current location pathname for underline effect

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li>
          <Link to="/">ACCUEIL</Link>
        </li>
        <li>
          <a href="#sectionExpertise">EXPERTISE</a>
        </li>
        <li>
          <a href="#sectionPartenaire">PARTENAIRE</a>
        </li>
        <li>
          <a href="#sectionContact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

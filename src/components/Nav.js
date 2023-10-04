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
          <a href="#sectionExpertise">Expertise</a>
        </li>
        <li>
          <a href="#sectionPartenaire">Partenaire</a>
        </li>
        <li>
          <a href="#sectionContact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

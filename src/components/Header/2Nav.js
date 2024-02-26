import "../../styles/header.scss";
import { Link, useLocation } from "react-router-dom";

// Navbar for header
function isHomePage(pathname) {
  return pathname === "/";
}

export default function HeaderNav() {
  const location = useLocation();
  // Get current location pathname for underline effect

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li>
          <Link to="/">ACCUEIL</Link>
        </li>
        {isHomePage(location.pathname) && (
          <>
            <li>
              <a href="#sectionExpertise">EXPERTISE</a>
            </li>
            <li>
              <a href="#sectionPartenaire">PARTENAIRE</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

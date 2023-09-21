import "../styles/header.scss";
import { Link } from "react-router-dom";

// Navbar for header
export default function Nav() {
      // Get current location pathname for underline effect
  const currentRoute = window.location.pathname;

    return (
<nav className="nav">
    <ul className="nav_list">
        <li className={
            currentRoute === "/" ? "nav_list_page-active" : "nav_list_page"
          }>
            <Link to="/">Accueil</Link>
        </li>
        <li className={
            currentRoute === "/contact" ? "nav_list_page-active" : "nav_list_page"
          }>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
</nav>
    );
}
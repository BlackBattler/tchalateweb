import "../styles/footer.scss";
import { Link } from "react-router-dom";

// Footer function
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer_copyright">
          Copyright © 2023 Tchalate SAS - Tous Droits Réservés -
          <Link to="/MentionLegale" className="footer_mention">
            {" "}
            Mentions Légales
          </Link>
        </p>
      </div>

      <div id="sectionContact">
        <p className="footer_contactTitre">CONTACT</p>
        <ul>
          <li>
            <p className="footer_telephone">Tel : 07 81 86 01 49</p>
          </li>
          <li>
            <p>
              E-mail :{" "}
              <a
                className="footer_email"
                href="mailto:coquin.jean-michel@tchalate.com"
              >
                coquin.jean-michel@tchalate.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

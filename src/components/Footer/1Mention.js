import { Link } from "react-router-dom";

export default function Mention() {
  return (
    <div>
      <p className="footer_copyright">
        &copy; {new Date().getFullYear()} Tchalate SAS - Tous Droits Réservés -
        <Link to="/MentionLegale" className="footer_mention">
          {" "}
          Mentions Légales
        </Link>
      </p>
    </div>
  );
}

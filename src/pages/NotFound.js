import "../styles/pageNotFound.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Page Error
export default function NotFound() {
  return (
    <div className="errorPage">
      <Header />
      <main className="notFound">
        <h1 className="notFound_error">404</h1>
        <p className="notFound_message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="notFound_backToHome" to="/">
          Accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}

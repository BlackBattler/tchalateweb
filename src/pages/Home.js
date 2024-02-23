import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Home/1Introduction";
import Expertise from "../components/Home/2Expertise";
import Partenaire from "../components/Home/3Partenaire";

// Page HOME
export default function Home() {
  return (
    <div className="Accueil">
      <Header />
      <Introduction />
      <Expertise />
      <Partenaire />
      <Footer />
    </div>
  );
}

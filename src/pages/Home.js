import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Home/0Introduction";
import Expertise from "../components/Home/1Expertise";
import Partenaire from "../components/Home/2Partenaire";
//import HomeContact from "../components/HomeContact";

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

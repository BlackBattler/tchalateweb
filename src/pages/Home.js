import Header from "../components/Header";
import Footer from "../components/Footer";
import QuiSommesNous from "../components/Home/QuiSommesNous";
import Expertise from "../components/Home/Expertise";
import Partenaire from "../components/Home/Partenaire";
//import HomeContact from "../components/HomeContact";

// Page HOME
export default function Home() {
  return (
    <div className="Accueil">
      <Header />
      <QuiSommesNous />
      <Expertise />
      <Partenaire />
      <Footer />
    </div>
  );
}

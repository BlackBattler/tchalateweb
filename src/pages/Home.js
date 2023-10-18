import Header from "../components/Header";
import Footer from "../components/Footer";
import QuiSommesNous from "../components/Home/QuiSommesNous";
import NosExpertises from "../components/Home/NosExpertises";
import NosPartenaire from "../components/Home/NosPartenaire";
//import HomeContact from "../components/HomeContact";

// Page HOME
export default function Home() {
  return (
    <div className="Accueil">
      <Header />
      <QuiSommesNous />
      <NosExpertises />
      <NosPartenaire />
      <Footer />
    </div>
  );
}

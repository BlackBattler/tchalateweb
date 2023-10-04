import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeMain from "../components/HomeMain";
import HomeExpertise from "../components/HomeExpertise";
import HomePartenaire from "../components/HomePartenaire";
import HomeContact from "../components/HomeContact";

//Home page
export default function Home() {
  return (
    <div className="Accueil">
      <Header />
      <HomeMain />
      <HomeExpertise />
      <HomePartenaire />
      <HomeContact />
      <Footer />
    </div>
  );
}

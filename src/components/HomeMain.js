import "../styles/pageHome.scss";

// Header function
export default function HomeMain() {
  return (
    <main id="sectionMain" className="sectionDisplay homeMain">
      <h1>QUI SOMMES-NOUS ?</h1>
      <div className="divIntro">
        <p className="text">
          Tchalate est un bureau d'étude spécialisé dans le développement
          informatique et électronique.
        </p>
        <p className="text">
          Notre mission est de proposer à nos clients des solutions de pointe
          répondant à leurs besoins spécifiques et à des prix compétitifs tout
          en créant un environnement de travail dynamique et stimulant pour les
          jeunes talents fraîchement diplômés en informatique et électronique.
        </p>
        <p className="text">
          Nous nous efforçons de les aider à développer leurs compétences
          techniques, à acquérir une expérience pratique et à se préparer pour
          une carrière réussie dans le secteur de la technologie.
        </p>
      </div>
    </main>
  );
}

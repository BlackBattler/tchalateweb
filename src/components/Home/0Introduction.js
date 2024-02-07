import "../../styles/pageHome.scss";
import ImgBanniere from "../../img/elecinfo_1920.jpg";

// Header function
export default function Introduction() {
  return (
    <main id="sectionMain" className="sectionDisplay introduction">
      <img src={ImgBanniere} alt="intelligence artificiel" />
      <div className="divIntro">
        <h1>
          <span className="textLogo">TCHALATE</span> est un bureau d'étude
          spécialisé dans le développement{" "}
          <span className="textGradient">informatique et électronique.</span>
        </h1>
        <p className="textIntro">
          Notre mission est de proposer à nos clients des solutions de pointe
          répondant à leurs besoins spécifiques et à des prix compétitifs tout
          en créant un environnement de travail dynamique et stimulant pour les
          jeunes talents fraîchement diplômés en informatique et électronique.
        </p>
        <p className="textIntro">
          Nous nous efforçons de les aider à développer leurs compétences
          techniques, à acquérir une expérience pratique et à se préparer pour
          une carrière réussie dans le secteur de la technologie.
        </p>
      </div>
    </main>
  );
}

import "../../styles/pageHome.scss";
import ImgGestion from "../../img/gestion_projet.jpg";
import ImgElectronique from "../../img/electronic.jpg";
import ImgInformatique from "../../img/informatique.png";
import ImgCollaboration from "../../img/collaboration.png";
import ImgQualite from "../../img/qualite.png";

// Header function
export default function Expertise() {
  return (
    <section id="sectionExpertise" className="sectionDisplay nosExpertise">
      <article className="articleExpertise">
        <div className="divText">
          <h2>Gestion de projet</h2>
          <p className="textExpertise">
            Traduire les besoins clients en cahier des charges, élaborer un
            projet répondant au attente du client, gestion du triptyque temps -
            produit - cout.
          </p>
        </div>
        <div className="divImage">
          <img src={ImgGestion} alt="pictogramme gestion projet" />
        </div>
      </article>
      <article className="articleExpertise reverseArticle">
        <div className="divText">
          <h2>Ingénierie électronique</h2>
          <p className="textExpertise">
            Nous concevons, développons et intégrons des systèmes électroniques
            correspondant aux cahier des charges précédemment établi.
          </p>
        </div>
        <div className="divImage">
          <img src={ImgElectronique} alt="pictogramme electronique" />
        </div>
      </article>
      <article className="articleExpertise">
        <div className="divText">
          <h2>Ingénierie informatique</h2>
          <p className="textExpertise">
            Notre expertise s'étend à la conception de logiciels, au
            développement d'applications embaquées, web et mobiles et à la
            gestion de bases de données. Nous aidons nos clients à mettre en
            place des solutions informatiques performantes pour répondre à leurs
            besoins spécifiques.
          </p>
        </div>
        <div className="divImage">
          <img src={ImgInformatique} alt="ligne de code informatique" />
        </div>
      </article>
      <article className="articleExpertise reverseArticle">
        <div className="divText">
          <h2>Collaboration</h2>
          <p className="textExpertise">
            Le travail d'équipe est au cœur de notre entreprise. Nous
            encourageons la collaboration entre les salariés.
          </p>
        </div>
        <div className="divImage">
          <img src={ImgCollaboration} alt="3 personnes travaillent en équipe" />
        </div>
      </article>
      <article className="articleExpertise">
        <div className="divText">
          <h2>Qualité</h2>
          <p className="textExpertise">
            Nous nous engageons à fournir des produits et des services de la
            plus haute qualité.
          </p>
        </div>
        <div className="divImage">
          <img src={ImgQualite} alt="tampon qualité" />
        </div>
      </article>
    </section>
  );
}

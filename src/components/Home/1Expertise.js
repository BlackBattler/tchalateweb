import "../../styles/pageHome.scss";

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
        <div className="divImage"></div>
      </article>
      <article className="articleExpertise reverseArticle">
        <div className="divText">
          <h2>Ingénierie électronique</h2>
          <p className="textExpertise">
            Nous concevons, développons et intégrons des systèmes électroniques
            correspondant aux cahier des charges précédemment établi.
          </p>
        </div>
        <div className="divImage"></div>
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
        <div className="divImage"></div>
      </article>
      <article className="articleExpertise reverseArticle">
        <div className="divText">
          <h2>Collaboration</h2>
          <p className="textExpertise">
            Le travail d'équipe est au cœur de notre entreprise. Nous
            encourageons la collaboration entre les salariés.
          </p>
        </div>
        <div className="divImage"></div>
      </article>
      <article className="articleExpertise">
        <div className="divText">
          <h2>Qualité</h2>
          <p className="textExpertise">
            Nous nous engageons à fournir des produits et des services de la
            plus haute qualité.
          </p>
        </div>
        <div className="divImage"></div>
      </article>
    </section>
  );
}

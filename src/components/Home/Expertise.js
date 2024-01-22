import "../../styles/pageHome.scss";

// Header function
export default function Expertise() {
  return (
    <section id="sectionExpertise" className="sectionDisplay nosExpertise">
      <h2>NOS EXPERTISES</h2>
      <div className="divExpertise">
        <p className="text">
          ⦁ Gestion de projet : Traduire les besoins clients en cahier des
          charges, élaborer un projet répondant au attente du client, gestion du
          triptyque temps - produit - cout
        </p>
        <p className="text">
          ⦁ Ingénierie électronique : Nous concevons, développons et intégrons
          des systèmes électroniques correspondant aux cahier des charges
          précédemment établi.
        </p>
        <p className="text">
          ⦁ Ingénierie informatique : Notre expertise s'étend à la conception de
          logiciels, au développement d'applications embaquées, web et mobiles
          et à la gestion de bases de données. Nous aidons nos clients à mettre
          en place des solutions informatiques performantes pour répondre à
          leurs besoins spécifiques.
        </p>
        <p className="text">
          ⦁ Collaboration : Le travail d'équipe est au cœur de notre entreprise.
          Nous encourageons la collaboration entre les salariés.
        </p>
        <p className="text">
          ⦁ Qualité : Nous nous engageons à fournir des produits et des services
          de la plus haute qualité
        </p>
      </div>
    </section>
  );
}

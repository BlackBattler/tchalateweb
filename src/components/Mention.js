import "../styles/pageMention.scss";

// Mention function
export default function HomeContact() {
  return (
    <section className="sectionMention">
      <h1>Mention Légale</h1>
      <ul>
        <li>
          <h2>Éditeur</h2>
          <p>Tchalate SAS</p>
          <p>Adresse :</p>
          <p>44 Rue de Bonnieux</p>
          <p>38500 Voiron</p>
          <p>France</p>
          <p>Numero siret :953 865 904 R.C.S. Grenoble</p>
        </li>
        <li>
          <h2>Directeur de publication</h2>
          <p>Phoomongchai-Coquin Atthaphon</p>
        </li>
        <li>
          <h2>Hébergement</h2>
          <p>OVH</p>
          <p>Siège social : 2 rue Kellermann</p>
          <p>59100 Roubaix</p>
          <p>France</p>
        </li>
      </ul>
    </section>
  );
}

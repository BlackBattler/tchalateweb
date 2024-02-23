import "../../styles/header.scss";
import Logo from "./1Logo";
import Nav from "./2Nav";
import Contact from "./3Contact";

// Header function
export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <Contact />
    </header>
  );
}

import "../styles/header.scss";
import Logo from "./Header/1Logo";
import Nav from "./Header/2Nav";
import Contact from "./Header/3Contact";

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

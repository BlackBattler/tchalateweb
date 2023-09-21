import "../styles/header.scss";
import Logo from "./Logo";
import Nav from "./Nav";

// Header function
export default function Header() {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    );
}
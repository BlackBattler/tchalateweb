import "../styles/header.scss";
import LogoHeader from "../img/logoTchalate.jpg";
import { Link } from "react-router-dom";

// Header function
export default function Header() {
    return (
        <header className="header">
            <h1>
                <Link to="/">
                    <img src={LogoHeader} alt="Logo Tchalate" className="logo"/>
                </Link>
            </h1>
        </header>
    );
}
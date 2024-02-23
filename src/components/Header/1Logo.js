import "../../styles/header.scss";
import LogoHeader from "../../img/logoTchalate.jpg";
import { Link } from "react-router-dom";

// Header function
export default function HeaderLogo() {
  return (
    <Link to="/">
      <img src={LogoHeader} alt="Logo Tchalate" className="logo" />
    </Link>
  );
}

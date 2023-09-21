import { Link } from 'react-router-dom';

//Error page
export default function NotFound() {
  return (
    <div className="errorPage">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Accueil</Link>
    </div>
  );
}

import "./NavBar.css";
import { Link } from "react-router-dom";
import viteLogo from "../assets/vite.svg";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to={`/`}>
            <img src={viteLogo} alt="Vite logo" />
          </Link>
        </li>
        <li>
          <Link to={`/projects`} className="link">
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link to={`/projects`}>
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link to={`/contact`}>
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

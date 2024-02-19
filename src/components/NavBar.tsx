import "./NavBar.css";
import { Link } from "react-router-dom";
// import viteLogo from "../assets/vite.svg";

function NavBar() {
  const fields = [
    {
      // Logo placeholder
      field: "</>",
      route: "/",
    },
    {
      field: "Projects",
      route: "/projects",
    },
    {
      field: "Contact",
      route: "/contact",
    },
  ];

  const navBarItems = fields.map((field) => {
    return (
      <li key={field.field}>
        <Link to={field.route}>{field.field}</Link>
      </li>
    );
  });

  return (
    <nav className="nav-bar">
      <ul>
        {/* If I ever decide to add a logo instead of </> */}
        {/* <li>
          <Link to={`/`} className="flex-link">
            <img src={viteLogo} alt="Vite logo" />
          </Link>
        </li> */}
        {navBarItems}
      </ul>
    </nav>
  );
}

export default NavBar;

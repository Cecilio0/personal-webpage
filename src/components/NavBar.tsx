import "./NavBar.css";
import { Link } from "react-router-dom";
// import viteLogo from "../assets/vite.svg";

function NavBar() {
  const fields = [
    {
      // Logo placeholder
      field: "</>",
      route: "/personal-webpage",
    },
    {
      field: "Projects",
      route: "/personal-webpage/projects",
    },
    {
      field: "Contact",
      route: "/personal-webpage/contact",
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
      <ul>{navBarItems}</ul>
    </nav>
  );
}

export default NavBar;

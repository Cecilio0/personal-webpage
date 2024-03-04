import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { NavBarItem, items } from "../utils/navBarItems";

function NavBar() {
  const location = useLocation();

  const isFieldSelected = (item: NavBarItem) => {
    if (
      location.pathname == item.route ||
      location.pathname == item.route + "/"
    ) {
      return (
        <li key={item.field}>
          <Link className="selected-item" to={item.route}>
            {item.field}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={item.field}>
          <Link className="item" to={item.route}>
            {item.field}
          </Link>
        </li>
      );
    }
  };

  const navBarItems = items.map((item) => {
    return isFieldSelected(item);
  });

  return (
    <nav className="nav-bar">
      <ul>{navBarItems}</ul>
    </nav>
  );
}

export default NavBar;

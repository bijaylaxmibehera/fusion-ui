import "./Component.css";
import { Link, Outlet } from "react-router-dom";

export const Component = () => {
  return (
    <div className="components">
      <ul className="component-list">
        <Link to="/components/avatar" className="navlink">
          <li>Avatar</li>
        </Link>
        <Link to="/components/alert" className="navlink">
          <li>Alert</li>
        </Link>
        <Link to="/components/button" className="navlink">
          <li>Button</li>
        </Link>
        <Link to="/components/badge" className="navlink">
          <li>Badge</li>
        </Link>
        <Link to="/components/card" className="navlink">
          <li>Card</li>
        </Link>
        <Link to="/components/headings" className="navlink">
          <li>Headings</li>
        </Link>
        <Link to="/components/image" className="navlink">
          <li>Image</li>
        </Link>
        <Link to="/components/text" className="navlink">
          <li>Text</li>
        </Link>
      </ul>

      <Outlet />
    </div>
  );
};

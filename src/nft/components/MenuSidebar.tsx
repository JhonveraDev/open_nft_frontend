import { NavLink } from "react-router-dom";
import "../../assets/style.css";

export const MenuSidebar = () => {
  return (
    <nav className="menu">
      <NavLink to="/" end className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
        <i className="fa-solid fa-house-user"></i> Home
      </NavLink>
      <NavLink to="/product" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
        <i className="fa-solid fa-cart-shopping"></i> Explore
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
        <i className="fa-solid fa-address-card"></i> About Us
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
        <i className="fa-solid fa-book"></i> Blog
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
        <i className="fa-solid fa-comments"></i> Contact
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
        <i className="fa-solid fa-scale-unbalanced"></i> Extra Element
      </NavLink>
    </nav>
  );
}

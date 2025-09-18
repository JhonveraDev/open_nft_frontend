import { NavLink } from "react-router-dom";
import myImage from "../../assets/images/logo.png";
import "../../assets/style.css";


const CustomSidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo / Brand */}
      <div className="sidebar-header">
        <div className="logo">
          <img src={myImage} alt="main logo" />
        </div>
        <div className="wallet">
          <button className="wallet-btn">Wallet Connect <i className="fa-solid fa-wallet"></i></button>
        </div>
      </div>

      {/* Main Menu */}
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

      {/* Footer */}
      <div className="sidebar-footer">
        <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
          <i className="fa-solid fa-scale-unbalanced"></i> English
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </NavLink>
      </div>
    </aside>
  );
}

export default CustomSidebar
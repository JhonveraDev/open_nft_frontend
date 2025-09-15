import { NavLink } from "react-router-dom";
import "../../assets/style.css";


const CustomSidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo / Brand */}
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">9</span>
          <span className="logo-text">OpeN9</span>
        </div>
        <button className="wallet-btn">Wallet Connect 💳</button>
      </div>

      {/* Main Menu */}
      <nav className="menu">
        <NavLink to="/" end className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
          <span className="icon">🏠</span> Home
        </NavLink>
        <NavLink to="/product" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
          <span className="icon">🔗</span> NFT Store
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
          <span className="icon">💎</span> About Us
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
          <span className="icon">📰</span> Blog
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
          <span className="icon">🎧</span> Contact
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="language">
          <span role="img" aria-label="flag">🇬🇧</span> English
        </div>
        <button className="logout">
          <span className="icon">↩️</span> Logout
        </button>
      </div>
    </aside>
  );
}

export default CustomSidebar
import { NavLink } from "react-router-dom";


export const FooterSidebar = () => {
  return (
    <div className="sidebar-footer">
      <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
        <i className="fa-solid fa-scale-unbalanced"></i> English
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
        <i className="fa-solid fa-right-from-bracket"></i> Logout
      </NavLink>
    </div>
  )
}

import { MenuSidebar } from "./MenuSidebar";
import { FooterSidebar } from "./FooterSidebar";
import { HeaderSidebar } from "./HeaderSidebar";
import "../../../assets/styles/style.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <HeaderSidebar />

      <MenuSidebar />

      <FooterSidebar />
    </aside>
  );
}
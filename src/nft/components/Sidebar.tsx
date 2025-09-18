import "../../assets/style.css";
import { MenuSidebar } from "./MenuSidebar";
import { FooterSidebar } from "./FooterSidebar";
import { HeaderSidebar } from "./HeaderSidebar";


export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <HeaderSidebar />

      <MenuSidebar />

      <FooterSidebar />
    </aside>
  );
}
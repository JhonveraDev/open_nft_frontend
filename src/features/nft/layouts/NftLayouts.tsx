import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";
import "../../../assets/styles/style.css";

export const NftLayouts = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

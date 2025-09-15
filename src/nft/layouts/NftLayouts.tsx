import { Outlet } from "react-router";
import CustomSidebar from "../components/CustomSidebar";
import "../../assets/style.css";

export const NftLayouts = () => {
  return (
    <div className="layout">
      <CustomSidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

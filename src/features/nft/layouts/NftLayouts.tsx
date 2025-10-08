import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";


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

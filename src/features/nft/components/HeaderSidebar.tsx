import { Logo } from "../../../components/custom/Logo";
import "../../../assets/styles/style.css";

export const HeaderSidebar = () => {
  return (
    <>
      <div className="sidebar-header">
        <Logo />
        <div className="wallet">
          <button className="wallet-btn">Wallet Connect <i className="fa-solid fa-wallet"></i></button>
        </div>
      </div>
    </>
  )
}

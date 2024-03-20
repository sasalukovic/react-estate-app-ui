import { Outlet } from "react-router-dom/dist";
import Navbar from "../../components/navbar/Navbar";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

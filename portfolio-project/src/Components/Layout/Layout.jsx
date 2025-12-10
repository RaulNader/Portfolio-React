import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import MainNavbar from "../Navbar/MainNavbar.jsx";

export default function Layout() {
  return (
    <div>
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

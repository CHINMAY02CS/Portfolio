import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "@/pages/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="mt-15 font-poppins">
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="mt-15 font-poppins">
        <Outlet />
      </div>
    </>
  );
}

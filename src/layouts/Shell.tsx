import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Shell() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

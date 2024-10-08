import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Profile from "@/components/Profile";
import Authorised from "@/components/auth/Authorised";

export default function Header() {
  return (
    <header className="print:hidden bg-brand-primary text-white sticky w-full top-0 z-50 h-16 flex items-center">
      <div className="container flex items-center justify-between mx-auto">
        <section className="">
          <div className="p-3">
            <Link to="/" className="font-bold flex items-center space-x-4">
              {/* <img src="logo.svg" className="h-4"></img> */}
              &lt;mortware/&gt;
            </Link>
          </div>
        </section>
        <nav className="p-3 flex gap-8">
          <div className="flex hidden lg:flex space-x-4">
            <Link
              to="/"
              className="text-white font-bold flex items-center space-x-4"
            >
              Home
            </Link>
            <Link
              to="/resume"
              className="text-white font-bold flex items-center space-x-4"
            >
              Resume
            </Link>
            <Authorised>
              <Link
                to="/tracks"
                className="text-white font-bold flex items-center space-x-4"
              >
                Tracks
              </Link>
            </Authorised>
            <Profile />
          </div>
          <div className="lg:hidden">
            <Menu />
          </div>
        </nav>
      </div>
    </header>
  );
}

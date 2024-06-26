import { Link } from "react-router-dom";
import Menu from "../components/Menu";

export default function Header() {
  return (
    <header className="print:hidden bg-brand-primary text-white">
      <div className="container flex items-center justify-between mx-auto">
        <section className="">
          <div className="p-3">
            <Link to="/" className="font-bold flex items-center space-x-4">
              {/* <img src="logo.svg" className="h-4"></img> */}
              &lt;mortware/&gt;
            </Link>
          </div>
        </section>
        <nav className="p-3">
          <div className="flex hidden lg:flex space-x-4">
            <Link to="/" className="text-white font-bold flex items-center space-x-4">
              Home
            </Link>
            <Link to="/resume" className="text-white font-bold flex items-center space-x-4">
              Resume
            </Link>
          </div>
          <div className="lg:hidden">
            <Menu />
          </div>
        </nav>
      </div>
    </header>
  )
}

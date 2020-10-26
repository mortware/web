import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => (
    <header className="print:hidden  bg-brand-primary text-white">
        <div className="lg:container flex items-center justify-between mx-auto">
            <section className="">
                <div className="p-3">
                    <Link to="/" className="font-bold flex items-center space-x-4">
                        {/* <img src="logo.svg" className="h-4"></img> */}
                        &lt;mortware/&gt;
                    </Link>
                </div>
            </section>
            <nav className="p-3">
                <div className="flex hidden md:flex space-x-4">
                    <Link to="/" className="text-white font-bold flex items-center space-x-4">
                        Home
                    </Link>
                    <Link to="/resume" className="text-white font-bold flex items-center space-x-4">
                        Resume
                    </Link>
                </div>
                <div className="md:hidden">
                    <Menu />
                </div>
            </nav>
        </div>
    </header>
);

export default Header;
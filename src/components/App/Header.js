import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => (
    <header className="print:hidden  bg-brand-primary text-white">
        <div className="lg:container flex items-center mx-auto">
            <section className="flex-1">
                <div className="p-3">
                    <Link to="/" className="font-bold flex items-center space-x-4">
                        {/* <img src="logo.svg" className="h-4"></img> */}
                        &lt;mortware/&gt;
                    </Link>
                </div>
            </section>
            <nav className="">
                <div className="container mx-auto p-3 flex justify-between items-center">
                    <Menu />
                </div>
            </nav>
        </div>
    </header>
);

export default Header;
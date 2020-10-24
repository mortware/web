import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => (
    <header className="print:hidden">
        <section className="bg-brand-primary text-white">
            <div className="p-3 container mx-auto">
                <Link to="/" className="font-bold">
                    mortware
                </Link>
            </div>
        </section>
        <nav className="border-b ">
            <div className="container mx-auto p-3 flex justify-between items-center">
                <Menu />
            </div>
        </nav>
    </header>
);

export default Header;
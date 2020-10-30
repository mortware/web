import React from 'react';

const Footer = () => (
    <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full border-t print:hidden " >
        &copy; Copyright {(new Date().getFullYear())} Mortware Ltd
    </footer>
);

export default Footer;
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white p-4 mt-auto">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Ace Infoway Pvt Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFullName } from '../../utils/function/common';

const Header = () => {
    const router = useRouter();
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const userToken = typeof window !== 'undefined' ? localStorage.getItem('user') : null;

        if (userToken) {
            const parsedToken = JSON.parse(userToken);

            if (parsedToken.token) {
                setUserName(getFullName(parsedToken));
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        router.push('/auth/login');
    };

    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Demo App</h1>
                {userName !== null ? (
                    <React.Fragment>
                        <span className="mr-2">Welcome, {userName}</span>
                        <button className="text-white hover:underline" onClick={handleLogout}>Logout</button>
                    </React.Fragment>
                ) : (
                    <button className="text-white hover:underline">Login</button>
                )}
            </div>
        </header>
    );
};

export default Header;

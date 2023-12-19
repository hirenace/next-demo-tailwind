// components/Header.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { getFullName } from '../../utils/common';
const Header = () => {
    const router = useRouter();
    // Assuming you have a function to get the user name and authentication status

    const handle = {
        logout: () => {
            localStorage.clear()
            router.push('/login');
        },
        getUserName: () => {
            let userToken: any = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
            // Replace this logic with your actual authentication logic
            userToken = JSON.parse(userToken)

            if (userToken?.token) {
                // User is logged in, retrieve and display user name
                return getFullName(userToken)
            } else {
                // User is not logged in
                return null;
            }
        }
    }
    const userName = handle.getUserName();

    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Demo App</h1>
                {userName ? (
                    <React.Fragment>
                        <span className="mr-2">Welcome, {userName}</span>
                        <button className="text-white hover:underline" onClick={() => handle.logout()}>Logout</button>
                    </React.Fragment>
                ) : (
                    // Display login button if user is not logged in
                    <button className="text-white hover:underline" >Login</button>
                )}
            </div>
        </header>
    );
};

export default Header;

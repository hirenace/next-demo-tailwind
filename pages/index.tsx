import React from 'react';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-gray-100">
                <div className="m-t-20 flex items-center justify-center">
                    <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
                        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome to the Home Page</h1>
                        <p className="text-gray-600 text-center">Explore amazing content and discover new things! </p>
                        <p className="text-gray font-bold text-center">Thank You</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
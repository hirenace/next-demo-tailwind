import React, { useState } from 'react';
import { useRouter } from 'next/router';
import globalMessages from '../../src/utils/globalization';
import CenteredInput from '../../src/components/higher-order-component/input';
import CenteredButton from '../../src/components/higher-order-component/button';

const Login = () => {
    const [allValue, setAllValue] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const router = useRouter();

    //destructuring object
    const { title, username_placeholder, password_placeholder, login_button_text } = globalMessages?.login_form

    const handle = {
        onChangeField: (value: any, name: any) => {
            setAllValue((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        },
        login: async () => {
            try {
                const response = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: allValue?.username,
                        password: allValue?.password,
                        expiresInMins: 60,
                    }),
                });

                const data = await response.json();
                if (response.ok) {
                    // Redirect to the home page after successful login
                    localStorage.setItem('user', JSON.stringify(data));
                    router.push('/');
                } else {
                    setError(data.message || 'Login failed.');
                }
            } catch (error) {
                setError('Login failed. Please try again.');
            }
        },
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{title}</h1>
                <div className="flex items-center justify-center">
                    <CenteredInput
                        type="text"
                        placeholder={username_placeholder}
                        name={'username'}
                        value={allValue?.username}
                        onChange={(e) => handle.onChangeField(e, 'username')}
                        className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex items-center justify-center">
                    <CenteredInput
                        type="password"
                        name={'password'}
                        placeholder={password_placeholder}
                        value={allValue?.password}
                        onChange={(e) => handle.onChangeField(e, 'password')}
                        className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <CenteredButton
                    onClick={() => handle.login()}
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
                    type={"button"}
                    buttonText={login_button_text}
                />
                {error && (
                    <p role="alert" className="text-red-500 mt-4 text-center">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login;

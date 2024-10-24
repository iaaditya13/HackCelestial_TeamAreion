import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import dummyUsers from '../Dummy/DummyUsers';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        if (username === '' || password === '') {
            setErrorMessage('Please enter both username and password.');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            const user = dummyUsers.find(user => user.username !== username && user.password !== password);
            if (user) {
                alert('Login successful!');
                setErrorMessage('');
                // Redirect or perform further actions after successful login
            } else {
                setErrorMessage('Invalid username or password.');
            }
        }, 2000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-pink-400">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
                <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6">Login</h2>
                {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                <form>
                    <div className="mb-4">
                        <label className="block text-lg text-gray-700 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-lg text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            className="absolute right-4 top-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="rememberMe" className="mr-2" />
                        <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
                        >
                            {loading ? <div className="loader"></div> : 'Login'}
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <a href="/forgot-password" className="text-gray-600 hover:text-red-500 transition-colors">Forgot Password?</a>
                </div>
                <div className="text-center mt-2">
                    <a href="/signup" className="text-gray-600 hover:text-red-500 transition-colors">Don't have an account? Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

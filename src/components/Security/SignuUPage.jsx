import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import dummyUsers from "../Dummy/DummyUsers"; // Import dummy users

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !username || !password || !accountType) {
            setErrorMessage('Please fill out all fields.');
            return;
        }

        // Check for existing username
        const existingUser = dummyUsers.find(user => user.username === username);
        if (existingUser) {
            setErrorMessage('Username already exists. Please choose another one.');
            return;
        }

        // Add new user to dummyUsers
        dummyUsers.push({ firstName, lastName, username, password, accountType });
        alert(`Signup successful as ${accountType}!`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-pink-400">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
                <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6">Sign Up</h2>
                {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-lg text-gray-700 font-medium mb-2">Account Type</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="freelancer"
                                    checked={accountType === 'freelancer'}
                                    onChange={() => setAccountType('freelancer')}
                                    className="mr-2"
                                    required
                                />
                                <span className="text-gray-600">Freelancer</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="client"
                                    checked={accountType === 'client'}
                                    onChange={() => setAccountType('client')}
                                    className="mr-2"
                                    required
                                />
                                <span className="text-gray-600">Client</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-gray-700 font-medium mb-2">First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-gray-700 font-medium mb-2">Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter your last name"
                            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-gray-700 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-gray-700 font-medium mb-2">Create Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-700 transition-colors duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p>Already have an account? <a href="/login" className="text-gray-600 hover:text-red-500 transition-colors duration-200">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

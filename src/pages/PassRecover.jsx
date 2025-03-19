import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../Appwrite/config';

function PassRecover() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const recover = async (e) => {
        e.preventDefault();
        try {
            const promise = account.createRecovery(email, 'https://ecom-pi-six.vercel.app/reset-password/:userId/:secret');
            promise.then(
                function(response) {
                    console.log(response);
                    alert('Recovery Email Sent');
                    navigate('/login');
                },
                function(error) {
                    console.error("Error details:", error); // Detailed error logging
                    alert('Error sending recovery email. Please try again.');
                }
            );
        } catch (error) {
            console.error("Unexpected error:", error); // Detailed error logging
            alert('An unexpected error occurred. Please try again.');
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="text-center font-bold text-2xl">Forgot Password</div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={recover}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a
                                    href="/signup"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Create new account
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Recover Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PassRecover;

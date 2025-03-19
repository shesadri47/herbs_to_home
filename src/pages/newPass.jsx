import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { account } from '../Appwrite/config';

function ResetPassword() {
    const navigate = useNavigate();
    const { userId, secret } = useParams();
    const [password, setPassword] = useState('');
    console.log(userId, secret);
    const handleReset = async (e) => {
        e.preventDefault();
        try {
            const promise = account.updateRecovery(userId, secret, password,password);
            promise.then(
                function(response) {
                    console.log(response);
                    alert('Password successfully reset');
                    navigate('/login');
                },
                function(error) {
                    console.log(error);
                    console.log(userId, secret);
                    alert('Error resetting password. Please try again.');
                }
            );
        } catch (error) {
            console.log(error);
            alert('An unexpected error occurred. Please try again.');
        }
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="text-center font-bold text-2xl">Reset Password</div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleReset}>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                New Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;

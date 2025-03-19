import React, { useEffect, useState } from 'react';
import { account } from '../Appwrite/config';
import { useNavigate, Link } from 'react-router-dom';

function Account({ orders }) {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const getData = account.get();
        getData.then(
            function(response) {
                setUserDetails(response);
            },
            function(error) {
                console.log(error);
            }
        );
    }, []);

    const handleLogout = async () => {
        try {
            await account.deleteSession('current');
            navigate('/');
            alert('Logout Success');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {userDetails ? (
                <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between items-center text-center py-4 px-6 mt-4 mb-6 bg-white rounded-md">
                    <div>
                        <p className="text-2xl font-semibold text-gray-700">Hello, {userDetails.name}</p>
                    </div>
                    <div className="ml-4">
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-lg transition duration-200"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="mt-4 text-center text-lg text-gray-600">
                    <p style={{marginBottom:'17px'}}>Please Login To see Profile</p>
                    <Link to="/Login">
                        <span className="bg-blue-500 hover:bg-blue-600 py-2 px-4 cursor-pointer text-white rounded-md text-lg transition duration-200 my-4">
                            Login
                        </span>
                    </Link>
                </div>
            )}
            {userDetails ? (
                orders.length > 0 ? (
                    <div className="mt-4 mb-6 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Orders</h2>
                        <ul className="list-none">
                            {orders.map((order, index) => (
                                <li key={index} className="p-4 mb-2 border rounded-md border-gray-200 shadow-sm text-lg bg-gray-50">
                                    <p className="font-medium text-gray-700">Product: {order.name}</p>
                                    <p className="text-gray-600">Price: ${order.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="mt-4 mb-6 text-center text-lg text-gray-600">No orders found.</p>
                )
            ) : (
                <div className="mt-4 mb-6 text-center text-lg text-gray-600">
                    <p>Please Login To view your orders</p>
                    
                </div>
            )}
        </>
    );
}

export default Account;

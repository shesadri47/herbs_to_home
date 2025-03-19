import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationSvg from '../assets/confirm.svg';

function CheckoutPage({ cart }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePlaceOrder = () => {
    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  // Calculate total price and per-item total using quantity
  let totalPrice = 0;
  const orderItems = [];

  cart.forEach((item) => {
    let itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    orderItems.push(
      <div key={item.id} className="flex justify-between mt-2">
        <span>{item.title} (x{item.quantity})</span>
        <span>₹{itemTotal.toFixed(2)}</span>
      </div>
    );
  });

  return (
    <div className="checkout-container p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        
        {/* Billing and Shipping Information */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Billing & Shipping Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Product Name</span>
            <span className="font-medium">Price</span>
          </div>
          {orderItems}
          <div className="flex justify-between mt-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Payment Information</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="MM/YY"
                required
              />
            </div>
          </form>
        </div>

        {/* Checkout Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>

        {/* Order Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <img src={ConfirmationSvg} alt="Order Confirmation" className="h-40 w-40" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;

import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removefromCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 gap-4">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between p-2 border-b">
                <div className="flex items-center gap-4">
                  <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover" />
                  <div>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-gray-600">Price: ₹{(item.price * 1).toFixed(2)}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">
                      Total: ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-red-500 text-white px-3 py-1 hover:bg-red-600 focus:outline-none"
                  onClick={() => removefromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-semibold">
            Total: ₹{totalPrice.toFixed(2)}
          </div>
          <div className='flex justify-end mt-4'>
            <Link to="/checkoutpage">
              <button className="bg-blue-400 p-2 rounded-2xl border border-black text-white hover:bg-blue-500">
                Checkout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;

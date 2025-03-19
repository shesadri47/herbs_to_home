import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar({ cart, onCategoryChange, onSearch }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="Nav">
      <nav>
        <ul className="flex flex-row p-4 gap-6 mx-5 text-md justify-between">
          <div className="flex items-center gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="ml-12">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-xl border border-gray-300 p-2 w-64 py-2"
                onChange={(e) => onSearch(e.target.value)}
              />
            </li>
            <li className="mx-5">
              </li>
          </div>
          <div className="flex items-center">
            {/* <li className="ml-4 mr-2"><Link to="/account">Account</Link></li> */}
            <li className="ml-4 mr-2">
              <Link to="/account" className="flex items-center space-x-2">
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                  alt="user-male-circle--v1"
                />
              </Link>
            </li>

            <li className="ml-4 mr-2 relative">
              <Link to="/cart">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C5.89543 18 5 18.8954 5 20C5 21.1046 5.89543 22 7 22C8.10457 22 9 21.1046 9 20C9 18.8954 8.10457 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1046 5.89543 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.66L8.1 13H14.55C15.3 13 15.96 12.59 16.3 11.97L20.88 4.73C20.96 4.59 21 4.44 21 4.28C21 3.57 20.43 3 19.72 3H5.21L4.27 1H1ZM17 18C15.8954 18 15 18.8954 15 20C15 21.1046 15.8954 22 17 22C18.1046 22 19 21.1046 19 20C19 18.8954 18.1046 18 17 18Z"
                    fill="currentColor"
                  />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 text-center text-white bg-red-500 rounded-full text-xs">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

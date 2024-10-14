import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full max-h-[70px]  bg-gray-900 text-white flex justify-between items-center p-4">
      <div>Logo</div>
      <ul className="flex justify-between items-center gap-6">
        <li>
          <Link href={"/login"}>
            <button
              type="button"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-1 px-4 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300">
              Log In
            </button>
          </Link>
        </li>
        <li>
          <Link href={"/CreateAccount"}>
            <button
              type="button"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-1 px-4 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300">
              Sign Up
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

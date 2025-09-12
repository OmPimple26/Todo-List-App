import React from "react";

const Navbar = () => {
  return (
    // <nav className="flex justify-around bg-pink-600 text-black py-2">
    <nav className="flex justify-around bg-gradient-to-r from-pink-600 to-purple-700 text-white py-3 shadow-md">
      <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all duration-50">
          Home
        </li>
        <li className="cursor-pointer hover:font-bold transition-all duration-50">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

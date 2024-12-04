import React from "react";

const Navbar = () => {
  return (
  <>
    <nav className="bg-white shadow-lg">
      <div className="container flex justify-between items-center ">
        {/*logo section*/}
        <a href="#" className="text-3xl font-bold text-gray-800">Logo</a>
        {/*menu section*/}
        <div className="hidden md:block">
          <ul className="flex font-semibold justify-center items-center gap-4">
            <li>
              <a href="#"
              className="text-gray-800 hover:text-gray-600 inline-block px-4 py-4 select-none"
              >Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  ); 
};

export default Navbar;

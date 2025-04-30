import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">Landio</div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Properties
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;

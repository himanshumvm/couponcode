import React from 'react';

function Navbar() {
  return (
    <div className="w-full bg-[#242424] py-4">
      <ul className="flex flex-wrap justify-center items-center text-white text-base text-[1.4rem] divide-x divide-gray-500">
        <li className="px-4 hover:text-yellow-400 hover:underline cursor-pointer transition">
          Fashion
        </li>
        <li className="px-4 hover:text-yellow-400 hover:underline cursor-pointer transition">
          Electronics
        </li>
        <li className="px-4 hover:text-yellow-400 hover:underline cursor-pointer transition">
          Home
        </li>
        <li className="px-4 hover:text-yellow-400 hover:underline cursor-pointer transition">
          Beauty
        </li>
        <li className="px-4 hover:text-yellow-400 hover:underline cursor-pointer transition">
          Toys
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

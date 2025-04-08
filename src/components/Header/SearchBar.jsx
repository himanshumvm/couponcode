import { MdSearch } from "react-icons/md";

function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#424242] w-full py-4 px-4 md:px-6">
      {/* Logo */}
      <img
        src="https://www.couponzguru.com/wp-content/themes/cguru-v2/img/logo.svg"
        alt="logo"
        className="h-12 md:h-20 w-32 md:w-40 object-contain"
      />

      {/* Search Input with Icon */}
      <div className="flex items-center w-full md:w-1/3 bg-white rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full px-4 py-2 bg-transparent outline-none text-gray-800 text-base"
        />
        <div className="bg-red-600 p-2 flex items-center justify-center">
          <MdSearch className="text-white text-2xl" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3  md:w-auto md:mr-20">
        <button
          type="button"
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        >
          Login
        </button>
        <button
          type="button"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

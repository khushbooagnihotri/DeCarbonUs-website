import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "../images/logo.png";

function Nav() {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img
            class="w-10 h-10 rounded-full mx-auto"
            src={AppLogo}
            alt="Website logo"
          />
          <span class="ml-3 text-xl">DeCarbonUs</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/home" class="mr-5 hover:text-gray-200">
            Home
          </Link>
          <a href="/" class="mr-5 hover:text-gray-200">
            Team
          </a>
          <a href="/" class="mr-5 hover:text-gray-200">
            Contact
          </a>
          <a href="/" class="mr-5 hover:text-gray-200">
            About Us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Nav;

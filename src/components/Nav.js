import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img class="w-10 h-10 rounded-full mx-auto" src="https://raw.githubusercontent.com/Rohit-RA-2020/Solution-Challenge/master/decarbonus/assets/images/logo.png" alt="Website logo" />
                    <span class="ml-3 text-xl">DeCarbonUs</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to='/home' class="mr-5 hover:text-gray-900">Home</Link>
                    <a class="mr-5 hover:text-gray-900">Team</a>
                    <a class="mr-5 hover:text-gray-900">Contact</a>
                    <a class="mr-5 hover:text-gray-900">About Us</a>
                </nav>

            </div>
        </header>
    );
}

export default Nav;
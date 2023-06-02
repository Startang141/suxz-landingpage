import React from "react";

import logo from "../assets/logo.svg";
import hamburger from "../assets/Hamburger.svg";

function navbar() {
    return (
        <div>
            <div className="flex justify-between sm:items-center">
            <img src={logo} className="w-[100px] sm:w-[120px] md:w-[130px]"></img>
            <img src={hamburger} className="sm:hidden"></img>
            <div className="hidden sm:block">
                <ul className="flex gap-3 font-medium text-gray-600 md:text-lg sm:font-semibold md:gap-5 xl:gap-7 xl:text-xl xl:-ml-72 xl:font-semibold">
                    <li>Home</li>
                    <li>Learnings</li>
                    <li>About Us</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <div className="sm:flex sm:gap-2 hidden sm:block">
                <button className="font-semibold text-indigo-400 md:text-lg xl:text-xl xl:mr-5"><a href="">Log in</a></button>
                <button className="font-semibold bg-indigo-400 rounded-md text-white px-2 py-1 md:text-lg xl:text-xl xl:px-8 xl:py-3 xl:rounded-lg"><a>Sign in</a></button>
            </div>
            </div>
        </div>
    )
}

export default navbar;
import React from "react";

import headIMG from "../assets/header_img.svg";

function hero() {
    return (
    <div className="sm:flex md:mt-20">
        <div className="w-[320px] mt-2 -ml-6 sm:w-[360px] md:w-[500px] sm:absolute sm:right-0 sm:mr-7 md:mr-12 xl:w-[570px] xl:mr-20">
        <img src={headIMG}></img>
        </div>
        <div className="mt-6 sm:mt-20 md:mt-24">
            <h5 className="text-indigo-400 text-sm md:text-base font-semibold md:font-bold">S U X Z  M A K E  I T  E A S Y </h5>
            <h2 className="font-bold text-4xl w-[80%] text-gray-900 my-1 leading-snug sm:w-[45%] md:text-6xl md:w-[50%] md:leading-snug">Find Your Way Of Success</h2>
            <p className="text-gray-800 my-2 text-sm w-[97%] sm:w-[45%] md:text-lg xl:my-6">We help you to increase self-confidence and train yourself in a direction, and make you more creative in developing a work</p>
            <div className="mt-6 justify-evenly text-sm md:text-lg font-semibold md:mt-10">
                <button className="bg-indigo-400 text-white px-8 py-3 mr-3 rounded-md"><a>Get Started</a></button>
                <button className="bg-gray-100 text-zinc-400 px-7 py-3 rounded-md"><a>Our Services</a></button>
            </div>
        </div>
    </div>
    )
}

export default hero;
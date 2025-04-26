import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div id="hero-section" className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-neutral-50">
                <div id="div-container" className="max-w-4xl mx-auto px-6 py-24 sm:py-28 md:py-32 flex flex-col items-center text-center">
                    
                    {/* Version Text */}
                    <div
                         id="version-text"
                         className="text-amber-800 border border-amber-300 shadow-md hover:shadow-xl hover:shadow-amber-600 hover:bg-amber-100 hover:scale-105 
                           transition-all duration-300 ease-in-out px-6 py-4 rounded-xl cursor-pointer w-full max-w-xl"
                     >
                      <span className="text-amber-500 font-semibold">v1.0.0:</span> Your Smart Note Companion is Live!
                     </div>


                    {/* Icons */}
                    <div id="icons" className="hidden md:flex justify-center gap-6 m-6 px-4 py-6 bg-gray-50 rounded-xl shadow-sm">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition">
                            <i className="fa-solid fa-code text-xl bg-indigo-100 p-2 rounded-full text-indigo-600"></i>
                            <span className="text-lg font-medium">Write ideas</span>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition">
                            <i className="fa-solid fa-arrow-pointer text-xl bg-indigo-100 p-2 rounded-full text-indigo-600"></i>
                            <span className="text-lg font-medium">School Work</span>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition">
                            <i className="fa-solid fa-laptop-code text-xl bg-indigo-100 p-2 rounded-full text-indigo-600"></i>
                            <span className="text-lg font-medium">Leactures</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mt-6 text-gray-800">
                       Your Ultimate Space for Notes, Ideas, and Creativity
                     </h1>


                    {/* Description */}
                    <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-700">
                      Capture your thoughts, organize your ideas, and stay inspired — all in one powerful, beautifully simple Note App.
                     </p>


                    {/* Buttons */}
                    <div id="button" className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                        <Link to='/noteForm'
                            className="border border-blue-800 bg-blue-700 text-white rounded-lg px-5 py-2 text-sm sm:text-base shadow-md 
                            hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-400 hover:scale-105 
                            transition-all duration-300 ease-in-out"

                        >
                            Get started
                        </Link>

                        <Link
                            to="/docs"
                            className="border border-gray-400 text-gray-800 rounded-lg px-5 py-2 text-sm sm:text-base 
                            hover:bg-gray-100 hover:text-black hover:shadow-md hover:scale-105 
                            transition-all duration-300 ease-in-out"
                        >
                            Read Docs
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

import React from "react";
import { Link } from "react-router";

function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-6 mt-8">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <p className="text-sm mb-2">&copy; {new Date().getFullYear()} NoteApp. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition">
                        GitHub
                    </a>
                    <Link to='/terms'  className="hover:text-orange-600 transition">
                    Terms and Conditions         
                    </Link>
                    <a href="/privacy" className="hover:text-orange-600 transition">
                        Privacy 
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

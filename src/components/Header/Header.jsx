import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src="https://imgs.search.brave.com/xpzUSmHsGpfw88nsL1BjEhkHXSu5Y1ebPJZgmDviN6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tL2Nkbi1j/Z2kvaW1hZ2UvZj1h/dXRvLHE9NzAvYmQ1/NzlhOTgtODBiOC00/MmFkLWE4ZDgtNDY3/OGNjOWIyMjI3L25v/dGVzXzAzX2JlbmVm/aXRfbmFtZV8yeC5w/bmc" alt="logo" className="h-10 w-auto" />
                    <span className="ml-2 text-xl font-bold text-gray-800">Note App</span>
                </Link>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                                isActive ? "text-orange-700 border-b-2 border-orange-700 pb-1" : "hover:text-orange-700"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) =>
                                isActive ? "text-orange-700 border-b-2 border-orange-700 pb-1" : "hover:text-orange-700"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) =>
                                isActive ? "text-orange-700 border-b-2 border-orange-700 pb-1" : "hover:text-orange-700"
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/noteForm" 
                            className={({ isActive }) =>
                                isActive ? "text-orange-700 border-b-2 border-orange-700 pb-1" : "hover:text-orange-700"
                            }
                        >
                           Create Note
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/noteList" 
                            className={({ isActive }) =>
                                isActive ? "text-orange-700 border-b-2 border-orange-700 pb-1" : "hover:text-orange-700"
                            }
                        >
                           All Notes
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

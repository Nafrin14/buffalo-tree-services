import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo1-optimized.webp";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
      : "text-gray-700 hover:text-green-700 transition";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Buffalo Tree Service Logo"
            className="w-16 h-16 object-contain flex-shrink-0"
          />

          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-green-700 leading-none">
              Buffalo Tree Service
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Professional Tree Care
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-lg font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-green-700"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 text-lg font-medium shadow-md">
          <NavLink
            onClick={() => setOpen(false)}
            to="/"
            className={linkClass}
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/services"
            className={linkClass}
          >
            Services
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={linkClass}
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/blog"
            className={linkClass}
          >
            Blog
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className={linkClass}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
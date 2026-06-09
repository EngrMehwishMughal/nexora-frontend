import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 md:mt-16 lg:mt-20 rounded-tl-[28px] rounded-tr-[28px] md:rounded-tl-[40px] md:rounded-tr-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + SOCIAL */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="bg-indigo-600 h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold text-white">
                N
              </div>

              <h2 className="text-2xl font-bold text-white">
                Nexora
              </h2>

            </div>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Premium electronics, beauty products,
              and lifestyle essentials delivered to your doorstep.
            </p>

            <div className="flex gap-3">

              <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-indigo-600 transition flex items-center justify-center">
                <FaFacebookF />
              </button>

              <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-indigo-600 transition flex items-center justify-center">
                <FaTwitter />
              </button>

              <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-indigo-600 transition flex items-center justify-center">
                <FaInstagram />
              </button>

              <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-indigo-600 transition flex items-center justify-center">
                <FaLinkedinIn />
              </button>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li>
                <a href="/" className="hover:text-indigo-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-indigo-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-indigo-400 transition">
                  Categories
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* CONTACT INFO */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-3 text-gray-400 text-sm leading-relaxed">

              <p>📞 +92 300 1234567</p>

              <p>📧 support@nexora.com</p>

              <p>📍 Main Boulevard, Lahore, Pakistan</p>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Subscribe Newsletter
            </h3>

            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              Get updates on latest products,
              offers and discounts.
            </p>

            <div className="relative">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white text-gray-900 rounded-full py-3 pl-5 pr-14 outline-none focus:ring-2 focus:ring-indigo-600"
              />

              <button className="absolute right-1 top-1 bg-indigo-600 hover:bg-indigo-700 h-10 w-10 rounded-full flex items-center justify-center text-white transition">
                <FaPaperPlane />
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} Nexora Store. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;
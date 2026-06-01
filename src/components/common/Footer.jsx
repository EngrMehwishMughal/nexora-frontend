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
    <footer className="bg-[#0B1020] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Social */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#F9A826] h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold text-black">
                N
              </div>

              <h2 className="text-2xl font-bold">
                Nexora
              </h2>
            </div>

            <p className="text-gray-400 mb-6">
              Premium electronics, beauty products,
              and lifestyle essentials delivered to
              your doorstep.
            </p>

            <div className="flex gap-3">
              <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#F9A826] transition flex items-center justify-center">
                <FaFacebookF />
              </button>

              <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#F9A826] transition flex items-center justify-center">
                <FaTwitter />
              </button>

              <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#F9A826] transition flex items-center justify-center">
                <FaInstagram />
              </button>

              <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#F9A826] transition flex items-center justify-center">
                <FaLinkedinIn />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-[#F9A826]">
                  Home
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-[#F9A826]">
                  About
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-[#F9A826]">
                  Categories
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-[#F9A826]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📞 +92 300 1234567</p>

              <p>📧 support@nexora.com</p>

              <p>
                📍 Main Boulevard,
                Lahore, Pakistan
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Subscribe Newsletter
            </h3>

            <p className="text-gray-400 mb-5">
              Get updates on latest products,
              offers and discounts.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  bg-white
                  text-black
                  rounded-full
                  py-3
                  pl-5
                  pr-14
                  outline-none
                "
              />

              <button
                className="
                  absolute
                  right-1
                  top-1
                  bg-[#F9A826]
                  h-10
                  w-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Nexora Store.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
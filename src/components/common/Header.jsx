import React from "react";
import Navbar from "./Navbar";
import Categorysidebar from "./Categorysidebar";


const Header = () => {
  return (
    <section
      className="
      grid
      lg:grid-cols-12
      gap-6
      py-10"
    >
      

      <div
        className="
        lg:col-span-2
        bg-white
        rounded-3xl
        shadow-lg
        p-5"
      > <Categorysidebar />
      </div>

      {/* Banner */}

      <div
        className="
        lg:col-span-8
        bg-[#0B1020]
        rounded-[30px]
        p-10
        text-white
        relative"
      >
        <h1 className="text-5xl font-bold">
          MINI CAMERA
        </h1>

        <p className="max-w-lg mt-5 text-gray-300">
          Premium electronics collection
          designed for creators.
        </p>

        <button
          className="
          mt-8
          bg-[#F9A826]
          text-white
          px-6
          py-3
          rounded-full"
        >
          Shop Now
        </button>

        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          alt=""
          className="
          absolute
          right-10
          top-10
          h-72
          object-contain"
        />
      </div>

      {/* Floating Toolbar */}
      <div
        className="
        lg:col-span-2
        flex
        lg:flex-col
        justify-center
        gap-4"
      >  <Navbar />
        <button className="bg-white p-4 rounded-full shadow-lg">
          🏠
        </button>

        <button className="bg-white p-4 rounded-full shadow-lg">
          👤
        </button>

        <button className="bg-white p-4 rounded-full shadow-lg">
          🔍
        </button>

        <button className="bg-white p-4 rounded-full shadow-lg">
          ❤️
        </button>

        <button className="bg-white p-4 rounded-full shadow-lg">
          ⚙️
        </button>
      </div>
    </section>
  );
};

export default Header;
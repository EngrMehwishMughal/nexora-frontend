import React from "react";
import {
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaSearch,
} from "react-icons/fa";

const topProducts = [
  {
    id: 1,
    name: "Mini Speaker",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400",
  },

  {
    id: 2,
    name: "Instant Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
  },
];

const Categorysidebar = () => {
  return (
    <div
      className="
      bg-white
      rounded-[30px]
      p-5
      shadow-lg
      h-full"
    >
      {/* Search */}

      <div className="relative">
        <input
          type="text"
          placeholder="Search Here"
          className="
          w-full
          border
          rounded-full
          py-2
          px-4
          pr-10
          outline-none"
        />

        <FaSearch
          className="
          absolute
          right-4
          top-3
          text-gray-500"
        />
      </div>

      {/* Top Picks */}

      <h3
        className="
        mt-6
        mb-4
        font-semibold
        text-sm
        uppercase
        text-gray-600"
      >
        Top Picks
      </h3>

      <div className="space-y-4">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="
            bg-gray-50
            rounded-2xl
            p-3
            flex
            items-center
            gap-3
            hover:shadow-md
            transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="
              h-16
              w-16
              rounded-xl
              object-cover"
            />

            <h4 className="font-medium text-sm">
              {product.name}
            </h4>
          </div>
        ))}
      </div>

      {/* Services */}

      <div className="mt-8 border-t pt-6 space-y-5">

        <div className="flex items-center gap-3">
          <FaTruck className="text-[#F9A826]" />
          <span className="text-sm">
            International Shipping
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaUndo className="text-[#F9A826]" />
          <span className="text-sm">
            40 Days Return
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaShieldAlt className="text-[#F9A826]" />
          <span className="text-sm">
            Secure Payments
          </span>
        </div>

      </div>
    </div>
  );
};

export default Categorysidebar;
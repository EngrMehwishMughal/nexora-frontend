import {
  FaCartShopping,
  FaTruck,
  FaShieldHalved,
} from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdReplay } from "react-icons/md";

const Categorysidebar = () => {
  return (
    <aside className="w-full lg:w-[240px] lg:sticky lg:top-4 h-fit p-5 flex flex-col gap-6">
      {/* SEARCH */}
      <div className="w-full">
  <div className="flex items-center bg-surface border border-border rounded-full p-1 shadow-sm focus-within:ring-2 focus-within:ring-primary">
 
    <input
      type="text"
      placeholder="Search products..."
      className=" min-w-0
        flex-1
        px-4
        py-3
        bg-transparent
        text-sm
        text-textPrimary
        border-none
        outline-none
        placeholder:text-textSecondary
        focus-within:ring-0
focus-within:ring-primary
focus-within:ring-opacity-30"/>

    <button
      type="button"
      className="shrink 0
        w-12
        h-12
        flex
        items-center
        justify-center
        bg-[#4F46E5]
        text-white
        hover:bg-indigo-700
        transition-all
        rounded-full
        hover:scale-90
        ">
       <FaMagnifyingGlass size={18} />
    </button>

  </div>
</div>
      {/* TOP PICK */}
      <div className="bg-surface rounded-xl p-4 shadow-sm border border-border">

        <h3 className="text-sm font-bold text-textPrimary mb-4">
          TOP PICK
        </h3>

        <div className="space-y-3">

          {/* ITEM */}
          {[
            {
              name: "SONY MINI SPEAKER",
              img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
            },
            {
              name: "INSTAX CAMERA",
              img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-surface p-3 rounded-lg hover:shadow-sm transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-md"
              />

              <div className="flex-1">
                <h4 className="text-xs font-semibold text-textPrimary">
                  {item.name}
                </h4>

                <button className="mt-2 bg-indigo-600 text-white p-2 rounded-full text-xs hover:bg-indigo-700">
                  <FaCartShopping />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-surface rounded-xl p-4 border border-border space-y-4">

        <div className="flex items-center gap-3 text-textPrimary">
          <FaTruck className="text-indigo-600" />
          <span className="text-sm">International Shipping</span>
        </div>

        <div className="flex items-center gap-3 text-textPrimary">
          <MdReplay className="text-indigo-600" />
          <span className="text-sm">40 Days Return</span>
        </div>

        <div className="flex items-center gap-3 text-textPrimary">
          <FaShieldHalved className="text-indigo-600" />
          <span className="text-sm">Secure Payments</span>
        </div>
      </div>
    </aside> 
  );
};

export default Categorysidebar;
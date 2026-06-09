import {
  FaHome,
  FaUser,
  FaSearch,
  FaHeart,
  FaBell,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full lg:w-[80px]">

      {/* Desktop Navbar */}
      <div className="hidden lg:flex w-[80px] h-[520px] flex-col items-center gap-6">
    {/* Your current vertical navbar code */}
        {/* LOGO */}
        <div className="w-12 h-12 bg-[#4F46E5] rounded-full flex items-center justify-center text-textPrimary text-lg font-bold">
          N
        </div>

        {/* NAV ICONS */}
        <div className="bg-surface border-border rounded-3xl shadow-sm p-2 flex flex-col items-center gap-4">

          <button className="w-10 h-10 rounded-xl bg-[#4F46E5] text-textPrimary flex items-center justify-center hover:bg-indigo-700 transition-all">
            <FaHome />
          </button>

          <button className="w-10 h-10 rounded-xl text-textPrimary  hover:bg-indigo-700 flex items-center justify-center transition-all">
            <FaUser />
          </button>

          <button className="w-10 h-10 rounded-xl text-textPrimary  hover:bg-indigo-700 flex items-center justify-center transition-all">
            <FaSearch />
          </button>

          <button className="w-10 h-10 rounded-xl text-textPrimary  hover:bg-indigo-700  flex items-center justify-center transition-all">
            <FaHeart />
          </button>

          <button className="w-10 h-10 rounded-xl text-textPrimary  hover:bg-indigo-700  flex items-center justify-center transition-all">
            <FaBell />
          </button>

          <div className="w-[2px] h-16 bg-border rounded-full my-2"></div>

          <img
            src="https://i.pravatar.cc/100"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-border"
          />
        </div>
      </div>

      {/* Mobile & Tablet Navbar */}
<div className="flex lg:hidden items-center justify-between bg-surface border-border rounded-2xl shadow-sm p-3 mb-4">

  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-textPrimary font-bold">
    A
  </div>

  <div className="flex items-center gap-2 overflow-x-auto">
    <button className="w-9 h-9 rounded-lg bg-primary text-textPrimary flex items-center justify-center">
      <FaHome />
    </button>

    <button className="w-9 h-9 rounded-lg text-textPrimary">
      <FaUser />
    </button>

    <button className="w-9 h-9 rounded-lg text-textPrimary">
      <FaSearch />
    </button>

    <button className="w-9 h-9 rounded-lg text-textPrimary">
      <FaHeart />
    </button>

    <button className="w-9 h-9 rounded-lg text-textPrimary">
      <FaBell />
    </button>
  </div>

  <img
    src="https://i.pravatar.cc/100"
    alt="User Avatar"
    className="w-10 h-10 rounded-full border border-border"
  />
</div>
    </div>
  );
};

export default Navbar;
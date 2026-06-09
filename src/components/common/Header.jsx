import Categorysidebar from "./Categorysidebar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaHeart, FaPaperPlane, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <section className="bg-background min-h-screen px-4 py-4 md:px-6 lg:px-6">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[240px_1fr_80px] gap-6 items-start">
      {/* LEFT SIDEBAR */}
      <div className="order-3 lg:order-1">
          <Categorysidebar />
        </div>
        {/* HERO SECTION */}
<div
  className="
    order-2 lg:order-2
    relative
    overflow-hidden lg:overflow-visible
    rounded-[28px] md:rounded-[36px] lg:rounded-[40px]
    min-h-[560px] md:h-[500px] lg:h-[480px]
    bg-[#070d1c]
    px-5 md:px-8 lg:px-10
    py-8 md:py-10 lg:py-12
  "
>
          {/* HERO BACKGROUND */}
          <div className="absolute inset-0 overflow-hidden rounded-[28px] md:rounded-[36px] lg:rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
              alt="Camera"
              className="absolute inset-0 w-[180px] md:w-[280px] lg:w-[320px] object-cover opacity-40 left-1/2 md:left-[68%]"
            />
            <div className="absolute inset-0 bg-[#050b18]/70"></div>
          </div>

          {/* HERO TEXT */}
          <div
  className="
    absolute
    left-5 md:left-8 lg:left-10
    top-8 md:top-[35%] lg:top-[38%]
    md:-translate-y-1/2
    z-20
    max-w-[280px] md:max-w-md
  "
>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold">
              MINI CAMERA
            </h1>

            <p className="text-gray-300 mt-4 text-sm leading-6 max-w-sm">
              Premium electronics designed for modern lifestyles.
            </p>

            <Link
              to="/products"
              className="inline-block mt-6 md:mt-8 bg-[#4F46E5] hover:bg-indigo-700 text-white px-6 md:px-8 py-3 rounded-full transition-all"
            >
              SHOP NOW
            </Link>
          </div>

        
          {/* RIGHT ARROW */}
          {/* ORGANIC SIDE CUTOUT ARROW */}
{/*<div
  className="
    hidden md:flex
    absolute
    top-1/2
    right-[-28px]
    lg:right-[-38px]
    -translate-y-1/2
    w-[72px]
    h-[120px]
    lg:w-[90px]
    lg:h-[150px]
    bg-white
    rounded-l-[999px]
    items-center
    justify-start
    pl-2
    lg:pl-3
    z-40
  "
>
  <button
    className="
      w-11 h-11
      lg:w-14 lg:h-14
      rounded-full
      bg-[#4F46E5]
      hover:bg-indigo-700
      text-white
      flex
      items-center
      justify-center
      text-lg
      lg:text-2xl
      shadow-lg
      transition-all
    "
  >
    <BsArrowRight />
  </button>
</div>*/}
{/* RIGHT SIDEBAR */}
<div
  className="
    hidden md:flex
    absolute
    top-0
    right-0
    h-full
    w-[70px]
    lg:w-[90px]
    bg-white
    items-center
    justify-center
    z-30
  "
>
  {/* NOTCH */}
  <div
    className="
      absolute
      top-1/2
      left-0
      -translate-x-1/2
      -translate-y-1/2
      w-[60px]
      h-[100px]
      lg:w-[80px]
      lg:h-[130px]
      bg-white
      rounded-full
      flex
      items-center
      justify-center
      shadow-sm
    "   style={{
      borderRadius: "60px",
    }}
  >
    <button
      className="
        w-10
        h-10
        lg:w-12
        lg:h-12
        rounded-full
        bg-[#F4A300]
        flex
        items-center
        justify-center
        text-black
        text-lg
        lg:text-xl
        hover:scale-105
        transition-all
      "
    >
      <BsArrowRight />
    </button>
  </div>
</div>
          {/* CENTER CAMERA IMAGE */}
          <img
            src="https://pngimg.com/uploads/camera_lens/camera_lens_PNG44.png"
            alt="Camera lens"
            className="absolute z-10 w-[220px] md:w-[330px] lg:w-[400px] top-[250px] md:top-20 lg:top-12 left-1/2 md:left-[62%] -translate-x-1/2"
          />
          {/* CATEGORY WHITE BASE */}
          <div
  className="
    absolute
    left-4 md:left-6 lg:left-8
    bottom-2 md:bottom-4 lg:bottom-6
    z-30
    bg-white
    rounded-[28px]
    md:rounded-[32px]
    p-2 md:p-3
    w-[calc(100%-2rem)] md:w-auto
  "
>
            <div className="w-full md:w-[380px] bg-indigo-500 rounded-[24px] md:rounded-[28px] px-4 md:px-6 py-5 shadow-lg">
            <h3 className="text-white text-[16px] font-bold mb-3">
                CATEGORIES
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-2">
                {[
                  "ART & CRAFT",
                  "AUTOMOTIVE",
                  "BABY",
                  "BEAUTY",
                  "BOY FASHION",
                  "COMPUTER",
                  "DEALS",
                  "GIRL FASHION",
                  "ELECTRONIC",
                  "HOME KITCHEN",
                  "MOVIE TV",
                  "VIDEO GAME",
                ].map((item) => (
                  <button
                    key={item}
                    className="h-[26px] rounded-full border border-white/40 text-[7px] md:text-[8px] font-semibold text-white px-2 whitespace-nowrap hover:bg-white hover:text-[#4F46E5] transition-all"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>


          {/* STATS CARD */}
          <div className="hidden md:block absolute bottom-4 right-8 lg:right-24 z-20 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-5 lg:p-6">
            <div className="flex gap-6 lg:gap-8 text-white">
              <div className="text-center">
                <FaHeart className="mx-auto mb-2" />
                <p className="text-sm">1.3K</p>
              </div>

              <div className="text-center">
                <FaStar className="mx-auto mb-2" />
                <p className="text-sm">1.5K</p>
              </div>

              <div className="text-center">
                <FaPaperPlane className="mx-auto mb-2" />
                <p className="text-sm">1.6K</p>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT NAVBAR */}
        <div className="order-1 lg:order-3">
          <Navbar />
        </div>
       
      </div>
      
    </section>
  );
};

export default Header;
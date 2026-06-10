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
    overflow-visible
    rounded-[28px] md:rounded-[36px] lg:rounded-[40px]
    min-h-[520px] md:h-[500px] lg:h-[480px]
    bg-[#070d1c]
    px-5 md:px-8 lg:px-10
    py-8 md:py-10 lg:py-12
  "
>
  

          {/* HERO BACKGROUND */}
          <div className="absolute inset-0 overflow-hidden rounded-[28px] md:rounded-[36px] lg:rounded-[40px]">
        
          <div
  className="
    hidden md:block
    absolute
    top-1/2
    right-[-54px]
    lg:right-[-64px]
    -translate-y-1/2
    w-[120px]
    h-[250px]
    lg:w-[125px]
    lg:h-[200px]
    z-40
  "
>
{/* White notch shape */}
  <svg
    viewBox="0 0 120 200"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="none"
  >
    <path
      d="
        M120 0
        L120 200
        L120 200
        C60 180 60 145 45 140
        C5 115 5 85 45 60
        C60 55 60 20 70 0
        Z
      "
      fill="white"
    />
  </svg>  
 
   </div>
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

           {/* Arrow button */}
           <div
  className="
    hidden md:block
    absolute
    top-1/2
    right-[-54px]
    lg:right-[-64px]
    -translate-y-1/2
    w-[120px]
    h-[250px]
    lg:w-[125px]
    lg:h-[200px]
    z-40
  ">
    <button
    className="
      absolute
      top-1/2
      left-[22px]
      lg:left-[28px]
      -translate-y-1/2
      w-12 h-12
      lg:w-14 lg:h-14
      rounded-full
      bg-[#4f45e7]
      text-white
      flex items-center justify-center
      text-xl lg:text-2xl
      shadow-md
    "
  >
    <BsArrowRight />
  </button></div>
          
          {/* CATEGORY WHITE BASE */}
          <div
  className="
    absolute
    left-0
    bottom-0
    z-30
    w-[calc(100%-2.5rem)] md:w-[370px] lg:w-[420px]
    h-[190px] md:h-[210px]
  "
>
  {/* WHITE SVG SHAPE */}
  <svg
  viewBox="0 0 500 250"
  className="absolute inset-0 w-full h-full"
  preserveAspectRatio="none"
>
  <path
    d="
      M50 50
      Q50 0 100 0
      H450
      Q500 0 500 50
      V200
      Q500 250 450 250

      H50
      V80

      Q50 50 0 50
      V0
      H50

      Z
    "
    fill="white"
  />
</svg>

  {/* INDIGO BOX */}
  <div
    className="
      relative
      z-10
      m-4 md:m-5
      bg-indigo-500
      rounded-[22px] md:rounded-[26px]
      px-4 md:px-6
      py-5
      shadow-lg
    "
  >
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
          className="
            h-[26px]
            rounded-full
            border border-white/40
            text-[7px] md:text-[8px]
            font-semibold
            text-white
            px-2
            whitespace-nowrap
            hover:bg-white
            hover:text-[#4F46E5]
            transition-all
          "
        >
          {item}
        </button>
      ))}
    </div>
  </div>
</div>
   {/*<div className="absolute left-4 md:left-8 bottom-[-40px] z-30 w-[700px] h-[220px]">
  
  {/* Content */}
  {/*<div className="relative z-10 px-8 py-6">
    <h3 className="text-black text-2xl font-bold mb-4">
      CATEGORIES
    </h3>

    <div className="grid grid-cols-4 gap-3">
      {/* buttons */}
  {/* </div>
  </div>
</div>*/}

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
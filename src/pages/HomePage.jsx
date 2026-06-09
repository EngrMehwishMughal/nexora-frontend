import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ProductGrid from "../components/products/ProductGrid";
import { FaFaceSmile, FaThumbsUp, FaTruckFast } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";

const HomePage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        {/* Beauty Section */}
        <section className="py-10 sm:py-12 lg:py-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 leading-tight">
            BEST SELLERS IN BEAUTY <br className="hidden sm:block" />
            & PERSONAL CARE
          </h2>

          <ProductGrid sectionType="circle" />
        </section>

        {/* Promo Section */}
        <section className="py-10 sm:py-12">
          <ProductGrid sectionType="promo" />
        </section>

        {/* Featured Banner Section */}
        <section className="py-10 sm:py-14 lg:py-16">
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-[#070b14] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#172033_0%,#05070d_70%)]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-5 sm:px-8 lg:px-16 py-10 sm:py-12 lg:py-16">
              
              {/* LEFT SIDE */}
              <div className="relative flex justify-center order-2 lg:order-1">
                <img
                  src="/assets/Playstation-xbox.PNG"
                  alt="Xbox"
                  className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] max-h-[360px] lg:max-h-[420px] object-contain"
                />

                <img
                  src="/assets/controller.png"
                  alt="Controller"
                  className="absolute bottom-0 right-2 sm:right-10 w-[140px] sm:w-[200px] lg:w-[250px]"
                />
              </div>

              {/* RIGHT SIDE */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                  PLAY <span className="text-indigo-500">MORE</span> AND
                  <br className="hidden sm:block" />
                  WAIT LESS
                </h2>

                <p className="mt-5 sm:mt-6 text-gray-300 text-sm sm:text-base leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
                  Experience gaming like never before with cutting-edge
                  technology, lightning-fast load times and seamless
                  performance.
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
                  <button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-full font-semibold transition">
                    SHOP NOW
                  </button>

                  <button className="font-semibold hover:text-indigo-400 transition">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-10 sm:py-12 lg:py-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            BEST SELLERS MORE TO LOVE
          </h2>

          <ProductGrid sectionType="product" />
        </section>

        {/* Features Bar */}
        <section className="w-full bg-indigo-500 rounded-2xl sm:rounded-3xl py-8 sm:py-10 my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-5 sm:px-8">
            
            <div className="flex items-center justify-center sm:justify-start gap-4 text-center sm:text-left">
              <FaFaceSmile className="text-4xl sm:text-5xl text-[#111827] shrink-0" />
              <div>
                <h3 className="text-[#111827] font-bold text-base sm:text-lg uppercase">
                  100% Satisfaction
                </h3>
                <p className="text-[#111827] text-xs sm:text-sm font-semibold uppercase">
                  If you unable
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4 text-center sm:text-left">
              <FaThumbsUp className="text-4xl sm:text-5xl text-[#111827] shrink-0" />
              <div>
                <h3 className="text-[#111827] font-bold text-base sm:text-lg uppercase">
                  Save 20% When You
                </h3>
                <p className="text-[#111827] text-xs sm:text-sm font-semibold uppercase">
                  Your Credit Card
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4 text-center sm:text-left">
              <FaTruckFast className="text-4xl sm:text-5xl text-[#111827] shrink-0" />
              <div>
                <h3 className="text-[#111827] font-bold text-base sm:text-lg uppercase">
                  Fast Shipping
                </h3>
                <p className="text-[#111827] text-xs sm:text-sm font-semibold uppercase">
                  If you load pc
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4 text-center sm:text-left">
              <TbReportMoney className="text-4xl sm:text-5xl text-[#111827] shrink-0" />
              <div>
                <h3 className="text-[#111827] font-bold text-base sm:text-lg uppercase">
                  14 Day Money Back
                </h3>
                <p className="text-[#111827] text-xs sm:text-sm font-semibold uppercase">
                  If you unable
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
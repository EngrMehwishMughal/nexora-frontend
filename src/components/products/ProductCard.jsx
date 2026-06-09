import { FaHeart, FaShoppingCart } from "react-icons/fa";
import BestSellerBadge from "./BestSellerBadge";

const ProductCard = ({ product, type, image, title, category, price }) => {
  const finalType = product ? "api-product" : type;

  const finalImage = product?.thumbnail || image;
  const finalTitle = product?.title || title;
  const finalCategory = product?.category || category;
  const finalPrice = product?.price || price;
  const finalDescription = product?.description;
  const finalRating = product?.rating;

  // CIRCLE CARD
  if (finalType === "circle") {
    return (
      <div className="text-center w-full">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full bg-white shadow-md flex items-center justify-center">
          <img
            src={finalImage}
            alt={finalTitle}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>

        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-bold uppercase">
          {finalTitle}
        </h3>
      </div>
    );
  }

  // PROMO CARD
  if (finalType === "promo") {
    return (
      <div className="bg-[#f8f8f8] rounded-[22px] sm:rounded-[30px] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 min-h-[220px]">
        <div className="text-center sm:text-left max-w-full sm:max-w-[220px]">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-gray-900">
            {finalTitle}
          </h3>

          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
            SHOP NOW
          </button>
        </div>

        <img
          src={finalImage}
          alt={finalTitle}
          className="h-28 sm:h-36 md:h-40 w-auto object-contain"
        />
      </div>
    );
  }

  // NORMAL PRODUCT / API PRODUCT CARD
  return (
    <div className="group w-full bg-white border border-gray-100 rounded-[18px] sm:rounded-[22px] p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all">
      <div className="relative bg-[#F9FAFB] rounded-[16px] sm:rounded-[20px] h-40 sm:h-48 md:h-52 flex items-center justify-center mb-3">
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-red-500 shadow-md">
          <FaHeart size={14} />
        </button>

        <div className="absolute top-3 left-3">
          <BestSellerBadge />
        </div>

        <img
          src={finalImage}
          alt={finalTitle}
          className="max-h-28 sm:max-h-32 md:max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="text-[11px] sm:text-xs text-gray-500 mb-1 capitalize">
        {finalCategory}
      </p>

      <h3 className="text-sm sm:text-base font-semibold text-[#111827] line-clamp-1">
        {finalTitle}
      </h3>

      {finalDescription && (
        <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
          {finalDescription}
        </p>
      )}

      <div className="flex items-center justify-between gap-2 mt-4">
        <span className="text-base sm:text-lg font-bold text-[#111827]">
          ${finalPrice}
        </span>

        {finalRating && (
          <span className="text-xs sm:text-sm text-yellow-500 whitespace-nowrap">
            ★ {finalRating}
          </span>
        )}
      </div>

      <button className="mt-4 w-full bg-indigo-600 text-white py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
        <FaShoppingCart size={13} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
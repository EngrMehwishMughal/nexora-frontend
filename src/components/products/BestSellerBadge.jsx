// src/components/products/BestSellerBadge.jsx

const BestSellerBadge = ({ text = "%" }) => {
  return (
    <span className="
    inline-flex items-center
    bg-indigo-500 text-white
    text-[8px] sm:text-[9px] md:text-[10px]
    font-semibold
    px-1.5 sm:px-2 md:px-3
    py-0.5 sm:py-1
    rounded-full
    uppercase
    tracking-wide
    whitespace-nowrap
  ">
      {text}
    </span>
  );
};

export default BestSellerBadge;
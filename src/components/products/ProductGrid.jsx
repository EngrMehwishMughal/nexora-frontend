import { useState } from "react";
import ProductCard from "./ProductCard";

const circleProducts = [
  {
    id: 1,
    type: "circle",
    title: "EOS Lotion",
    image: "/assets/lotion.webp",
  },
  {
    id: 2,
    type: "circle",
    title: "Dove Shampoo",
    image: "/assets/Shampoo.png",
  },
  {
    id: 3,
    type: "circle",
    title: "Maybelline Lash",
    image: "/assets/Mascara.avif",
  },
  {
    id: 4,
    type: "circle",
    title: "Vitamin C",
    image: "/assets/serum.webp",
  },
  {
    id: 5,
    type: "circle",
    title: "Soap",
    image: "/assets/Soap.webp",
  },
];

const promoProducts = [
  {
    id: 6,
    type: "promo",
    title: "1 Seat Comfort In Every Seat",
    image: "/assets/Sofa.jpeg",
    buttonText: "Shop Now",
  },
  {
    id: 7,
    type: "promo",
    title: "Xbox Joystick Thrustmaster",
    image: "/assets/joystick.webp",
    buttonText: "Shop Now",
  },
];

const bestSellerProducts = [
  {
    id: 8,
    type: "product",
    title: "PlayStation Controller",
    category: "Gaming",
    price: 100,
    image: "/assets/Play-station.webp",
  },
  {
    id: 9,
    type: "product",
    title: "Ladies Hand Bag",
    category: "Fashion",
    price: 50,
    image: "/assets/Handbag.jpg",
  },
  {
    id: 10,
    type: "product",
    title: "Body Spray",
    category: "Beauty",
    price: 100,
    image: "/assets/Body-Spray.webp",
  },
  {
    id: 11,
    type: "product",
    title: "Body Wash",
    category: "Beauty",
    price: 100,
    image: "/assets/Body-Wash.webp",
  },
  {
    id: 12,
    type: "product",
    title: "Smart Watch",
    category: "Electronics",
    price: 120,
    image: "/assets/watch.png",
  },
  {
    id: 13,
    type: "product",
    title: "Headphones",
    category: "Audio",
    price: 80,
    image: "/assets/headphone.png",
  },
];

const ProductGrid = ({ sectionType, products: apiProducts = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  let products = [];

  if (apiProducts.length > 0) {
    products = apiProducts;
  } else if (sectionType === "circle") {
    products = circleProducts;
  } else if (sectionType === "promo") {
    products = promoProducts;
  } else if (sectionType === "product") {
    products = bestSellerProducts;
  }

  const showPagination =
    sectionType === "product" && products.length > productsPerPage;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = showPagination
    ? products.slice(startIndex, startIndex + productsPerPage)
    : products;

    return (
      <>
        <div
          className={
            sectionType === "promo"
              ? "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
              :sectionType === "circle"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"}
        >
          {currentProducts.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard
                {...product}
                product={apiProducts.length > 0 ? product : undefined}
              />
            </div>
          ))}
        </div>
    
        {showPagination && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8 sm:mt-10">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 sm:px-4 py-2 text-sm border rounded-lg bg-white disabled:opacity-40"
            >
              Prev
            </button>
    
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
    
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 text-sm rounded-lg ${
                    currentPage === page
                      ? "bg-indigo-600 text-white"
                      : "border bg-white"
                  }`}
                >
                  {page}
                </button>
              );
            })}
    
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 sm:px-4 py-2 text-sm border rounded-lg bg-white disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </>
    );
  };
export default ProductGrid;
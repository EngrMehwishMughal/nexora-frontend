import { useEffect, useState } from "react";
import ProductGrid from "../components/products/ProductGrid";
import Footer from "../components/common/Footer";
import { FaSearch } from "react-icons/fa";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://dummyjson.com/products?limit=30");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError("Products could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sortBy === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <main className="bg-[#F9FAFB] min-h-screen pt-6 sm:pt-8 lg:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* PAGE TITLE */}
        <section className="mb-6 sm:mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-bold">
              A
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Explore Our Collection
              </h1>

              <p className="text-sm sm:text-base text-gray-500 mt-1 max-w-2xl">
                Shop premium electronics, beauty products, home essentials and more.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>

          <div className="flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 px-4 sm:px-5 py-2 rounded-full capitalize text-sm sm:text-base font-medium transition ${
                  category === item
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* SEARCH + SORT */}
        <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-gray-300 pl-11 sm:pl-12 pr-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-60 rounded-full border border-gray-300 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
            >
              <option value="default">Default Sorting</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </section>

        {loading && (
          <p className="text-center text-gray-500 py-10">
            Loading products...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 py-10">
            {error}
          </p>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No products found.
          </p>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <ProductGrid sectionType="product" products={filteredProducts} />
        )}
      </div>

      <Footer />
    </main>
  );
};

export default ProductListPage;
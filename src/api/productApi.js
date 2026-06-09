export const getProducts = async (page = 1, limit = 8) => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
  
    return response.json();
  };
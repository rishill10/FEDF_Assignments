import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

import ProductInfo from "./ProductInfo";

function ProductDashboard() {
  // useState
  const [products, setProducts] = useState([
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 3000 },
    { name: "Keyboard", price: 1500 },
  ]);

  const [search, setSearch] = useState("");

  // useRef
  const searchRef = useRef();

  // useEffect
  useEffect(() => {
    document.title = `Search: ${search}`;
  }, [search]);

  // Filter products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // useMemo
  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }, [filteredProducts]);

  // useCallback
  const removeProduct = useCallback((index) => {
    setProducts((prevProducts) =>
      prevProducts.filter((_, i) => i !== index)
    );
  }, []);

  return (
    <div>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() => searchRef.current.focus()}
      >
        Focus Search
      </button>

      <h3>Total Price: ₹{totalPrice}</h3>

      <ProductInfo
        products={filteredProducts}
        removeProduct={removeProduct}
      />
    </div>
  );
}

export default ProductDashboard;
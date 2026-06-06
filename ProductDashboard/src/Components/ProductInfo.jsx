import React from "react";

function ProductInfo({ products, removeProduct }) {
  return (
    <div>
      <h2>Products</h2>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ₹{product.price}

            <button
              onClick={() => removeProduct(index)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ProductInfo);
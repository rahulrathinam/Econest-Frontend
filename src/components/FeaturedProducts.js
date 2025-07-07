import React from "react";

const products = [
  { id: 1, title: "Bamboo Toothbrush", price: "₹199", image: "toothbrush.png" },
  { id: 2, title: "Cotton Tote Bag", price: "₹499", image: "bag.jpg" }
];

const FeaturedProducts = () => (
  <section className="featured-products" id="shop">
    <h2>Featured Products</h2>
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={`/images/${product.image}`} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedProducts;

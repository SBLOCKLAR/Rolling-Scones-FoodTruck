import "./ProductCard.css";
// import products from "./ProductData";

function addToCart(e) {
  e.preventDefault();
  console.log("Item added!");
}

export default function ProductCard() {
  return (
    <div className="ProductCard">
      <form action="">
        <img
          className="productImage"
          src="src/assets/MERCH/tumbler.png"
          alt="Glass Tumbler"
        />
        <p className="productPrice">$22.99</p>
        <p className="productName">Glass Tumbler</p>
        <div className="selectors">
          <label htmlFor="qty">Qty</label>
          <input
            type="number"
            className="qtySelect"
            placeholder="0"
            name="qty"
          />
        </div>
        <button onClick={addToCart} className="addToCart">
          Add to Cart
        </button>
      </form>
    </div>
  );
}

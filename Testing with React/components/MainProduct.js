import "./MainProduct.css";

function MainProduct(props) {
  return (
    <div class="product">
      {/* I need to find out if I can include if statements here for the roast
      and size options */}
      <img class="productImage" src={props.img} alt="" />
      <p class="productPrice">${props.cost}</p>
      <p class="productName">{props.name}</p>
      <button class="addToCart">Add to Cart</button>
    </div>
  );
}

export default MainProduct;

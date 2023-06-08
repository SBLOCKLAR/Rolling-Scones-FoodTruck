import { showHideCartPreview } from "./CartUtils";
import "./CartPreview.css";

export default function CartPreview() {
  return (
    <div className="cartPreview">
      <h3 className="previewHeader"></h3>
      <div className="cartContents"></div>
      <div className="buttonContainer">
        <button onClick={showHideCartPreview} id="keepShopping">
          Keep Shopping
        </button>
        <button id="checkout">Checkout</button>
      </div>
    </div>
  );
}

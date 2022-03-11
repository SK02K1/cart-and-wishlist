import { CartItem } from "../components/components";
import { useCart } from "../contexts/cart-context";

export const Cart = () => {
  const {
    state: { cartItems }
  } = useCart();

  return (
    <div>
      <h1 className="text-2xl text-center m-sm-tb">Cart</h1>
      {!Object.keys(cartItems).length && (
        <p className="text-center">
          cart is empty{" "}
          <span role="img" aria-label="cart emoji">
            🛒
          </span>
        </p>
      )}
      <div className="cart-items grid-container auto">
        {Object.values(cartItems).map((itemInfo) => (
          <CartItem key={itemInfo.id} itemInfo={itemInfo} />
        ))}
      </div>
    </div>
  );
};

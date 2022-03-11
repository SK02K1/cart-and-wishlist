import { useCart } from "../contexts/cart-context";
import { getNumberOfItemsInCart } from "../modules/modules";

export const Navbar = ({ handleRoute, route }) => {
  const {
    state: { cartItems }
  } = useCart();

  const numberOfItemsInCart = getNumberOfItemsInCart(cartItems);

  return (
    <nav className="navbar">
      <div className="logo">
        <button onClick={() => handleRoute("/")} className="nav-link">
          FS.
        </button>
      </div>
      <ul className="links">
        <li className={`active-tab-${route === "/products"}`}>
          <button onClick={() => handleRoute("/products")} className="nav-link">
            Products
          </button>
        </li>
        <li className={`active-tab-${route === "/wishlist"}`}>
          <button onClick={() => handleRoute("/wishlist")} className="nav-link">
            Wishlist
          </button>
        </li>
        <li className={`active-tab-${route === "/cart"}`}>
          <button onClick={() => handleRoute("/cart")} className="nav-link">
            Cart(
            {numberOfItemsInCart})
          </button>
        </li>
      </ul>
    </nav>
  );
};

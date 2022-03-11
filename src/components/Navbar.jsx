import { useCart } from "../contexts/cart-context";

export const Navbar = ({ handleRoute, route }) => {
  const {
    state: { cartItems }
  } = useCart();

  const itemsInCart = Object.values(cartItems).reduce(
    (numOfItemsInCart, { qty }) => numOfItemsInCart + qty,
    0
  );

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
            {itemsInCart})
          </button>
        </li>
      </ul>
    </nav>
  );
};

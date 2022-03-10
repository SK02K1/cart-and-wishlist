export const Navbar = ({ handleRoute }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <button onClick={() => handleRoute("/")} className="nav-link">
          FS.
        </button>
      </div>
      <ul className="links">
        <li>
          <button onClick={() => handleRoute("/products")} className="nav-link">
            Products
          </button>
        </li>
        <li>
          <button onClick={() => handleRoute("/wishlist")} className="nav-link">
            Wishlist
          </button>
        </li>
        <li>
          <button onClick={() => handleRoute("/cart")} className="nav-link">
            Cart
          </button>
        </li>
      </ul>
    </nav>
  );
};

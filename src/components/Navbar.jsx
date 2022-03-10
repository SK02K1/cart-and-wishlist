export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <button className="nav-link">FS.</button>
      </div>
      <ul className="links">
        <li>
          <button className="nav-link">Products</button>
        </li>
        <li>
          <button className="nav-link">Wishlist</button>
        </li>
        <li>
          <button className="nav-link">Cart</button>
        </li>
      </ul>
    </nav>
  );
};

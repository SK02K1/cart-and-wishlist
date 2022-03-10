import { useState } from "react";
import { Navbar } from "./components";
import { Cart, Home, Products, Wishlist } from "../pages/pages";

export const Main = () => {
  const [route, setRoute] = useState("/");
  const updateRoute = (newRoute) => setRoute(newRoute);
  return (
    <div>
      <Navbar handleRoute={updateRoute} route={route} />
      {route === "/" && <Home />}
      {route === "/products" && <Products />}
      {route === "/wishlist" && <Wishlist />}
      {route === "/cart" && <Cart />}
    </div>
  );
};

import { useState } from "react";
import { Navbar } from "./components";
import { Home, Products, Wishlist } from "../pages/pages";

export const Main = () => {
  const [route, setRoute] = useState("/");
  const updateRoute = (newRoute) => setRoute(newRoute);
  return (
    <div>
      <Navbar handleRoute={updateRoute} />
      {route === "/" && <Home />}
      {route === "/products" && <Products />}
      {route === "/wishlist" && <Wishlist />}
    </div>
  );
};

import { useState } from "react";
import { Navbar } from "./components";
import { Home, Products } from "../pages/pages";

export const Main = () => {
  const [route, setRoute] = useState("/");
  const updateRoute = (newRoute) => setRoute(newRoute);
  return (
    <div>
      <Navbar handleRoute={updateRoute} />
      {route === "/" && <Home />}
      {route === "/products" && <Products />}
    </div>
  );
};

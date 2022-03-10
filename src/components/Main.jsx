import { useState } from "react";
import { Home } from "../pages/Home";
import { Navbar } from "./Navbar";

export const Main = () => {
  const [route, setRoute] = useState("/");
  const updateRoute = (newRoute) => setRoute(newRoute);
  return (
    <div>
      <Navbar handleRoute={updateRoute} />
      {route === "/" && <Home />}
    </div>
  );
};

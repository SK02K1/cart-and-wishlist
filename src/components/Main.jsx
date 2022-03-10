import { useState } from "react";
import { Navbar } from "./Navbar";

export const Main = () => {
  const [route, setRoute] = useState("/");
  const updateRoute = (newRoute) => setRoute(newRoute);
  return (
    <div>
      <Navbar handleRoute={updateRoute} />
      <p>{route}</p>
    </div>
  );
};

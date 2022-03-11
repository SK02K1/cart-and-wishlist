const { createContext, useReducer, useContext } = require("react");

const initialState = { cartItems: {} };
const cartReducer = (state, { type, payload: { id, name, price, img } }) => {
  switch (type) {
    default:
      return state;
  }
};

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state }}>{children}</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

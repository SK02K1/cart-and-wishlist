import { cartReducer } from "../reducers/cart-reducer";
const { createContext, useReducer, useContext } = require("react");

const initialState = { cartItems: {} };

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (itemInfo) => {
    dispatch({ type: "ADD_TO_CART", payload: itemInfo });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const incrementQty = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  };

  const decrementQty = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  };

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, incrementQty, decrementQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

const { createContext, useReducer, useContext } = require("react");

const initialState = { cartItems: {} };
const cartReducer = (state, { type, payload: { id, name, price, img } }) => {
  switch (type) {
    case "ADD_TO_CART":
      return state.cartItems[id]
        ? {
            ...state,
            cartItems: {
              ...state.cartItems,
              [id]: { ...state.cartItems[id], qty: state.cartItems[id].qty + 1 }
            }
          }
        : {
            ...state,
            cartItems: {
              ...state.cartItems,
              [id]: { id, name, price, img, qty: 1 }
            }
          };

    case "REMOVE_FROM_CART":
      const cartItems = { ...state.cartItems };
      delete cartItems[id];
      return { ...state, cartItems };

    default:
      return state;
  }
};

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (itemInfo) => {
    dispatch({ type: "ADD_TO_CART", payload: itemInfo });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

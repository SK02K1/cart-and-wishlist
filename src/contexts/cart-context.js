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

  return (
    <CartContext.Provider value={{ state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

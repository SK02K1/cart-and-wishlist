export const cartReducer = (
  state,
  { type, payload: { id, name, price, img } }
) => {
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
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [id]: { ...state.cartItems[id], qty: state.cartItems[id].qty + 1 }
        }
      };

    default:
      return state;
  }
};

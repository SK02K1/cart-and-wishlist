export const getNumberOfItemsInCart = (cartItems) =>
  Object.values(cartItems).reduce(
    (numOfItemsInCart, { qty }) => numOfItemsInCart + qty,
    0
  );

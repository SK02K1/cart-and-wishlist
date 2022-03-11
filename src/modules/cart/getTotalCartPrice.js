export const getTotalCartPrice = (cartItems) => {
  return Object.values(cartItems).reduce(
    (totalCartPrice, { price, qty }) => price * qty,
    0
  );
};

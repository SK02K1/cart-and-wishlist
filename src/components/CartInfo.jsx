import { getNumberOfItemsInCart, getTotalCartPrice } from "../modules/modules";

export const CartInfo = ({ cartItems }) => {
  const totalCartPrice = getTotalCartPrice(cartItems);
  const numberOfItemsInCart = getNumberOfItemsInCart(cartItems);
  const discount = numberOfItemsInCart * 5;
  const deliveryCharge = 20;
  const totalAmount = totalCartPrice + deliveryCharge - discount;
  return (
    <div>
      <div className="cart-detail-card">
        <h2 className="text-base  m-sm-tb ">Price Details</h2>
        <div className="m-sm-tb">
          <span>Price ({getNumberOfItemsInCart(cartItems)} item)</span>
          <span>${totalCartPrice} USD</span>
        </div>
        <div className="m-sm-tb">
          <span>Discount</span>
          <span>- ${discount} USD</span>
        </div>
        <div className="m-sm-tb">
          <span>Delivery Charges</span>
          <span>$20.00 USD</span>
        </div>
        <h2 className="text-base m-sm-tb">
          <span>Total Amount</span>
          <span>${totalAmount} USD</span>
        </h2>
        <button className="btn btn-primary m-xs-tb">PLACE ORDER</button>
      </div>
    </div>
  );
};

import { useCart } from "../contexts/cart-context";

export const CartItem = ({ itemInfo }) => {
  const { id, name, price, img, qty } = itemInfo;
  const { removeFromCart } = useCart();

  return (
    <div>
      <div className="card">
        <div className="card-header m-xs-tb">
          <img className="card-img m-xs-tb" src={img} alt={name} />
        </div>
        <div className="card-body m-xs-tb">
          <h2 className="item-price m-xs-tb">$ {price} USD</h2>
          <h3 className="card-title m-xs-tb">{name}</h3>
        </div>
        <div className="card-footer m-xs-tb">
          <div className="product-qty-controls">
            <button className="btn btn-primary">
              <span className="material-icons-outlined"> remove </span>
            </button>
            <div className="qty">{qty}</div>
            <button className="btn btn-primary">
              <span className="material-icons-outlined"> add </span>
            </button>
          </div>
          <button
            onClick={() => removeFromCart(id)}
            className="btn btn-secondary outlined card-btn m-sm-t"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

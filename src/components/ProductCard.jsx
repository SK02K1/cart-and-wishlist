export const ProductCard = ({ itemInfo }) => {
  const { name, price, img } = itemInfo;

  return (
    <div className="card">
      <span className="material-icons-outlined card-icon-like">
        favorite_border
      </span>
      <div className="card-header m-xs-tb">
        <img className="card-img m-xs-tb" src={img} alt={name} />
      </div>
      <div className="card-body m-xs-tb">
        <h2 className="item-price m-xs-tb">$ {price} USD</h2>
        <h3 className="card-title m-xs-tb">{name}</h3>
      </div>
      <div className="card-footer m-xs-tb">
        <button className="btn btn-primary card-btn">Add to cart</button>
      </div>
    </div>
  );
};

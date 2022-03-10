import { ProductCard } from "../components/components";
import { items } from "../data/data";

export const Products = () => {
  return (
    <div>
      <h1 className="text-2xl text-center m-sm-tb">Products</h1>
      <div className="products grid-container auto">
        {items.map((itemInfo) => (
          <ProductCard itemInfo={itemInfo} key={itemInfo.id} />
        ))}
      </div>
    </div>
  );
};

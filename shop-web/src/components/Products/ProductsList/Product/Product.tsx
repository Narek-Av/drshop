import { IProduct } from "../../../../interfaces";

type ProductType = {
  product: IProduct;
};

const Product: React.FC<ProductType> = ({ product }) => {
  console.log(`product`, product);

  return (
    <div className="product">
      <div className="product-card">{product.name}</div>
    </div>
  );
};

export default Product;

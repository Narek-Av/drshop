import { IProduct } from "../../../../interfaces";

import "./Product.scss";

type ProductType = {
  product: IProduct;
  id: number;
};

const Product: React.FC<ProductType> = ({ product, id }) => {
  console.log(`product`, product);

  return (
    <div className="product">
      <div className="product-card">
        <div className="product-card-img">
          <img src={`https://picsum.photos/id/${id}/200/300`} alt="" />
        </div>
        <div className="product-card-info">{product.name}</div>
        <div className="product-card-btn">
          <button className="btn btn-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

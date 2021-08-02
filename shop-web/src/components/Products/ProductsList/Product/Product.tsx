import { Link } from "react-router-dom";
import { IProduct } from "../../../../interfaces";

import "./Product.scss";

type ProductType = {
  product: IProduct;
  id: number;
};

const Product: React.FC<ProductType> = ({ product, id }) => {
  return (
    <div className="product">
      <div className="product-card">
        <div className="product-card-img">
          <img src={`https://picsum.photos/id/${id}/200/300`} alt="" />
        </div>
        <div className="product-card-info">
          <Link to={`/products/${product._id}`}>{product.name}</Link>
        </div>
        <div className="product-card-bottom">
          <div className="product-card-price">
            <span>$</span>
            {product.price}
          </div>
          <button className="btn btn-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

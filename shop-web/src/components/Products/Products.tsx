import { Product } from "../../interfaces";
import "./Products.scss";

type ProductsProps = {
  products: Product[];
};

const Products: React.FC<ProductsProps> = ({ products }) => {
  console.log(`products`, products);
  return <div className="products-container">Products</div>;
};

export default Products;

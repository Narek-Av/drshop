import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getProducts } from "../../store/products/productsSlice";
import Loader from "../UI/Loader";
import "./Products.scss";
import ProductsList from "./ProductsList";

const Products: React.FC = () => {
  const { products, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products-container">
      {isLoading && <Loader />}
      {error && <p>Error!</p>}
      {products && <ProductsList products={products} />}
    </div>
  );
};

export default Products;

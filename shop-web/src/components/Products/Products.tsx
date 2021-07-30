import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { RootState } from "../../store";
import { getProducts } from "../../store/products/productsSlice";
import Loader from "../UI/Loader";
import Pagination from "../UI/Pagination/Pagination";

import ProductHeader from "./ProductHeader/ProductHeader";
import ProductsList from "./ProductsList";
import "./Products.scss";

const Products: React.FC = () => {
  const { totalPages, products, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    const queryPagination = search.match(/(\d+)(?!.*\d)/);

    if (queryPagination !== null) {
      dispatch(getProducts(+queryPagination[0]));
    } else {
      dispatch(getProducts(1));
    }
  }, [dispatch, search]);

  return (
    <div className="products-container">
      {totalPages && <ProductHeader />}
      {isLoading && <Loader />}
      {error && <p>Error!</p>}
      {products && <ProductsList products={products} />}
      {totalPages && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default Products;

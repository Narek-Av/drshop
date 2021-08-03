import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductsHeader from "../../components/Products/ProductsHeader";
import ProductsList from "../../components/Products/ProductsList";
import ProductsSidebar from "../../components/Products/ProductsSidebar";
import Loader from "../../components/UI/Loader";
import { RootState } from "../../store";
import { getProducts } from "../../store/products/productsSlice";

import "./Home.scss";

const Home: React.FC = () => {
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
    <div className="home">
      <ProductsHeader />
      <ProductsSidebar />
      {isLoading && <Loader />}
      {error && <p>Error!</p>}
      {products && <ProductsList products={products} totalPages={totalPages} />}
    </div>
  );
};

export default Home;

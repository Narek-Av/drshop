import { ReactComponent as FilterIcon } from "../../../assets/icons/filter.svg";
import "./ProductHeader.scss";

const ProductHeader: React.FC = () => {
  return (
    <div className="products-header">
      <div className="products-filter">
        <div className="products-filter-icon">
          <FilterIcon />
          filter
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;

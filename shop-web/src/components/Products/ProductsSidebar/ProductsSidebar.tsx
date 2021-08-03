import "./ProductsSidebar.scss";

const ProductsSidebar: React.FC = () => {
  return (
    <div className="products-sidebar">
      <div className="products-sidebar-filter">
        <div className="filter-info">
          <h2 className="filter-title">Filter & Refine</h2>
        </div>
        <div className="filter-list"></div>
      </div>
    </div>
  );
};

export default ProductsSidebar;

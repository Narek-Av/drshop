import { useState } from "react";

import CustomSelect from "../../UI/CustomSelect";

import "./ProductsHeader.scss";

const ProductsHeader: React.FC = () => {
  const [name, setName] = useState("");

  return (
    <div className="products-header">
      <CustomSelect
        defaultValue="hello"
        value={name}
        setValue={(value) => setName(value)}
        values={["price", "name", "hello"]}
      />
    </div>
  );
};

export default ProductsHeader;

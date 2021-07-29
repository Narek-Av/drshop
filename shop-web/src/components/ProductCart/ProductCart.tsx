import React from "react";
import { useState } from "react";

import "./ProductCart.scss";

type ProductCartProps = {
  cartActive: boolean;
};

const ProductCart: React.FC<ProductCartProps> = ({ cartActive }) => {
  const [active, setActive] = useState(cartActive);
  const cartClassNames = `product-cart ${active ? " product-cart-active" : ""}`;

  return (
    <div className={cartClassNames}>
      {active ? "CartItem Active" : "CartItea Ivactive"}
      <button onClick={() => setActive(false)} className="btn btn-close">
        Close
      </button>
    </div>
  );
};

export default ProductCart;

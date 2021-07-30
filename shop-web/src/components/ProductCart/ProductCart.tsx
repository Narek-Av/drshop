import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CancelIcon } from "../../assets/icons/cancel.svg";

import { RootState } from "../../store";
import { onHideCart } from "../../store/app/appSlice";

import "./ProductCart.scss";

type ProductCartProps = {
  cartActive: boolean;
};

const ProductCart: React.FC<ProductCartProps> = () => {
  const dispatch = useDispatch();
  const { showCart } = useSelector((state: RootState) => state.app);
  const cartClassNames = `product-cart ${
    showCart ? " product-cart-active" : ""
  }`;

  return (
    <div className={cartClassNames}>
      <div className="product-cart-header">
        <h3>Cart</h3>
        <button
          onClick={() => dispatch(onHideCart())}
          className="btn btn-close"
        >
          <CancelIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;

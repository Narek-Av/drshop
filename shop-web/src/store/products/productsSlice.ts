import { IProduct } from "../../interfaces";
import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { AppDispatch, AppThunk } from "..";

interface ProductsState {
  isLoading: boolean;
  error: string;
  products: IProduct[] | undefined;
}

const initialState: ProductsState = {
  isLoading: false,
  products: undefined,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsPending: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    productsSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    productsFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = productsSlice;

export const { productsPending, productsSuccess, productsFail } = actions;

export const getProducts = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(productsPending());

  try {
    const res = await api.get("/products");
    dispatch(productsSuccess(res.data.products));
  } catch (error) {
    dispatch(productsFail("error.response.data.message"));
  }
};

export const getProduct =
  (id: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(productsPending());
    // try {
    //   const res = await api.post("/products/id=");
    //   dispatch(loginSuccess(res.data.result));
    //   localStorage.setItem("token", res.data.token);
    // } catch (error) {
    //   dispatch(loginFail(error.response.data.message));
    //   setTimeout(() => {
    //     dispatch(loginFail(""));
    //   }, 3000);
    // }
  };

export default reducer;

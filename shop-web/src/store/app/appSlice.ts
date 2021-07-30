import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";

type AppState = {
  showCart: boolean;
};

const initialState: AppState = {
  showCart: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showCart: (state) => {
      state.showCart = true;
    },
    hideCart: (state) => {
      state.showCart = false;
    },
  },
});

const { reducer, actions } = appSlice;

export const { showCart, hideCart } = actions;

export const onShowCart = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(showCart());
};

export const onHideCart = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(hideCart());
};

export default reducer;

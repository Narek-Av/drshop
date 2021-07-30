import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import authReducer from "./auth/authSlice";
import appReducer from "./app/appSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    app: appReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

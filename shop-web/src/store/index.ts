import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
// import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reducer: counterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

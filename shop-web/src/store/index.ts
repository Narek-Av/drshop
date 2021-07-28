import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
// import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: {
    login: authReducer,
    reducer: counterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

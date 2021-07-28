import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import loginReducer from "./login/loginSlice";
// import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    reducer: counterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { AppDispatch } from "..";

interface LoginState {
  isLoading: boolean;
  isAuth: boolean;
  error: string;
  userData: {};
}

const initialState: LoginState = {
  isLoading: false,
  isAuth: false,
  userData: {},
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: state => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.userData = action.payload;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(loginPending());

    try {
      const data = api.post("/user/login", {
        email,
        password,
      });

      console.log(`data`, data);
    } catch (error) {}
  };

export const signup =
  (data: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) =>
  async (dispatch: AppDispatch) => {
    dispatch(loginPending());
    const { username, email, password, confirmPassword } = data;

    try {
      const data = await api.post("/user", {
        username,
        email,
        password,
        confirmPassword,
      });
      console.log(`data`, data);
      loginSuccess(data);
    } catch (error) {
      loginFail(error.response.data.message);
    }
  };

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail } = actions;

export default reducer;

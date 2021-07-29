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

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: state => {
      state.isLoading = true;
      state.error = "";
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.userData = action.payload;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = authSlice;

export const { loginPending, loginSuccess, loginFail } = actions;

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(loginPending());

    try {
      const res = await api.post("/user/login", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data.result));
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      dispatch(loginFail(error.response.data.message));

      setTimeout(() => {
        dispatch(loginFail(""));
      }, 3000);
    }
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
      const res = await api.post("/user", {
        username,
        email,
        password,
        confirmPassword,
      });
      dispatch(loginSuccess(res.data.result));
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      dispatch(loginFail(error.response.data.message));
      setTimeout(() => {
        dispatch(loginFail(""));
      }, 3000);
    }
  };

export default reducer;

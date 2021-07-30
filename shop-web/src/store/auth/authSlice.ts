import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { AppDispatch, AppThunk } from "..";
import { IUser } from "../../interfaces";

interface LoginState {
  isLoading: boolean;
  isAuth: boolean;
  error: string;
  authData: IUser | undefined;
}

const initialState: LoginState = {
  isLoading: false,
  isAuth: false,
  authData: undefined,
  error: "",
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.authData = action.payload;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.authData = undefined;
    },
  },
});

const { reducer, actions } = authSlice;

export const { loginPending, loginSuccess, loginFail, logoutSuccess } = actions;

export const login =
  (email: string, password: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(loginPending());

    try {
      const res = await api.post("/user/login", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data.result));
      localStorage.setItem("authData", JSON.stringify(res.data));
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
  }): AppThunk =>
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
      localStorage.setItem("authData", JSON.stringify(res.data));
    } catch (error) {
      dispatch(loginFail(error.response.data.message));
      setTimeout(() => {
        dispatch(loginFail(""));
      }, 3000);
    }
  };

export const logout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem("authData");
  dispatch(logoutSuccess());
};

export default reducer;

import { IUser } from "./../../interfaces/index";
import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { AppDispatch, AppThunk } from "..";

interface AuthState {
  isLoading: boolean;
  isAuth: boolean;
  error: string;
  token: string | null;
  user: IUser | null;
}

const initialState: AuthState = {
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
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
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.token = null;
      state.user = null;
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
      dispatch(loginSuccess(res.data));
      localStorage.setItem("token", JSON.stringify(res.data.token));
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
      dispatch(loginSuccess(res.data));
      localStorage.setItem("token", JSON.stringify(res.data.token));
    } catch (error) {
      dispatch(loginFail(error.response.data.message));
      setTimeout(() => {
        dispatch(loginFail(""));
      }, 3000);
    }
  };

export const getUser = (token: string) => async (dispatch: AppDispatch) => {
  dispatch(loginPending());

  try {
    if (token) {
      const res = await api.post(
        "/user/data",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        console.log(`res.data.user`, res.data.user);
        dispatch(loginSuccess({ user: res.data.user, token }));
      }
    }
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutSuccess());
};

export default reducer;

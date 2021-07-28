import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "..";

interface LoginState {
  isLoading: boolean;
  isAuth: boolean;
  error: string;
}

const initialState: LoginState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const signin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(loginPending());

    // try {
    //   const {
    //     data: { data: accessToken },
    //   };
    // } catch (error) {}
  };

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail } = actions;

export default reducer;

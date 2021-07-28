import { createSlice } from "@reduxjs/toolkit";
import { CurrentUser } from "../../interfaces";

export interface AuthState {
  isAuth: boolean;
  currentUser?: CurrentUser;
  isLoading: boolean;
  error: string;
}

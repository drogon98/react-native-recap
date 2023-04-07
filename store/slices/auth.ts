import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  tokens: any;
  loading: boolean;
  error: string;
  success: boolean;
}

const initialState: IAuthState = {
  tokens: null,
  loading: false,
  error: "",
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<any>) => {
      state.tokens = action.payload;
    },
    unsetTokens: (state) => {
      state.tokens = null;
    },
  },
});

export const { setTokens, unsetTokens } = authSlice.actions;

export const authReducer = authSlice.reducer;

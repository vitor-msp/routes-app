import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoutes, IRoutesState } from "./routes.types";

const initialState: IRoutesState = {
  data: null,
  error: false,
};

export const routesSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    getRoutesSuccess: (state, { payload }: PayloadAction<IRoutes>) => {
      state.data = payload;
      state.error = false;
    },
    getRoutesFailure: (state) => {
      state.data = null;
      state.error = true;
    },
  },
});

export const { getRoutesSuccess, getRoutesFailure } = routesSlice.actions;

export const routesReducer = routesSlice.reducer;

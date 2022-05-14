import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPath, IPathState } from "./path.types";

const initialState: IPathState = {
  data: null,
  error: false,
};

export const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    getMinRouteSuccess: (state, { payload }: PayloadAction<IPath>) => {
      state.data = payload;
      state.error = false;
    },
    getMinRouteFailure: (state) => {
      state.data = null;
      state.error = true;
    },
  },
});

export const { getMinRouteSuccess, getMinRouteFailure } = pathSlice.actions;

export const pathReducer = pathSlice.reducer;
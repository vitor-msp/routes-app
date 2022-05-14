import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGraphState, IGraph } from "./graph.types";

const initialState: IGraphState = {
  data: null,
  error: false,
  selected: false,
};

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    getGraphSuccess: (state, { payload }: PayloadAction<IGraph>) => {
      state.data = payload;
      state.error = false;
    },
    getGraphFailure: (state) => {
      state.data = null;
      state.error = true;
    },
    postGraphSuccess: (state, { payload }: PayloadAction<IGraph>) => {
      state.data = payload;
      state.error = false;
    },
    postGraphFailure: (state) => {
      state.data = null;
      state.error = true;
    },
    selectGraph: (state) => {
      state.selected = true;
    },
    unselectGraph: (state) => {
      state.selected = false;
    },
  },
});

export const {
  getGraphSuccess,
  getGraphFailure,
  postGraphSuccess,
  postGraphFailure,
  selectGraph,
  unselectGraph
} = graphSlice.actions;

export const graphReducer = graphSlice.reducer;

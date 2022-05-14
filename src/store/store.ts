import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { graphReducer } from "./ducks/graph/graph.slice";
import { pathReducer } from "./ducks/path/path.slice";
import { routesReducer } from "./ducks/routes/routes.slice";

export const store = configureStore({
  reducer: {
    graph: graphReducer,
    routes: routesReducer,
    path: pathReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

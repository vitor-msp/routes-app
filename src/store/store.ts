import { configureStore } from "@reduxjs/toolkit";
import { graphReducer } from "./ducks/graph/graph.reducer";
import { pathReducer } from "./ducks/path/path.reducer";
import { routesReducer } from "./ducks/routes/routes.reducer";

export const store = configureStore({
  reducer: {
    graph: graphReducer,
    routes: routesReducer,
    path: pathReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

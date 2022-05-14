import { combineReducers } from "redux";
import { graphReducer } from "./graph/graph.reducer";
import { pathReducer } from "./path/path.reducer";
import { routesReducer } from "./routes/routes.reducer";

export const rootReducer = combineReducers({
  graph: graphReducer,
  routes: routesReducer,
  path: pathReducer,
});
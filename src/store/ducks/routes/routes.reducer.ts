import { Reducer } from "redux";
import { RoutesState, RoutesTypes } from "./routes.types";

const INITIAL_STATE: RoutesState = {
  data: null,
  error: false,
};

export const routesReducer: Reducer<RoutesState> = (
  state = INITIAL_STATE,
  action
) => {
  const { GET_SUCCESS, GET_FAILURE } = RoutesTypes;

  switch (action.type) {
    case GET_SUCCESS:
      return {
        data: action.payload,
        error: false,
      };

    case GET_FAILURE:
      return {
        data: action.payload,
        error: true,
      };

    default:
      return state;
  }
};

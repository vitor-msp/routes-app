import { Reducer } from "redux";
import { IRoutesState, RoutesTypes } from "./routes.types";

const INITIAL_STATE: IRoutesState = {
  data: null,
  error: false,
};

export const routesReducer: Reducer<IRoutesState> = (
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

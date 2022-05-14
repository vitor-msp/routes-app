import { Reducer } from "redux";
import { GraphState, GraphTypes } from "./graph.types";

const INITIAL_STATE: GraphState = {
  data: null,
  error: false,
};

export const graphReducer: Reducer<GraphState> = (
  state = INITIAL_STATE,
  action
) => {
  const { POST_SUCCESS, POST_FAILURE, GET_SUCCESS, GET_FAILURE } = GraphTypes;

  switch (action.type) {
    case POST_SUCCESS:
    case GET_SUCCESS:
      return {
        data: action.payload,
        error: false,
      };

    case POST_FAILURE:
    case GET_FAILURE:
      return {
        data: action.payload,
        error: true,
      };

    default:
      return state;
  }
};

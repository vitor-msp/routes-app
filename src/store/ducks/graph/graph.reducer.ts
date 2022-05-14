import { Reducer } from "redux";
import { IGraphState, GraphTypes } from "./graph.types";

const INITIAL_STATE: IGraphState = {
  data: null,
  error: false,
};

export const graphReducer: Reducer<IGraphState> = (
  state = INITIAL_STATE,
  action
) => {
  const { POST_SUCCESS, POST_FAILURE, GET_SUCCESS, GET_FAILURE, CLEAR } = GraphTypes;

  switch (action.type) {
    case POST_SUCCESS:
    case GET_SUCCESS:
    case CLEAR:
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

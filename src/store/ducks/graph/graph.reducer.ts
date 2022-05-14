import { Reducer } from "redux";
import { IGraphState, GraphTypes } from "./graph.types";

const INITIAL_STATE: IGraphState = {
  data: null,
  error: false,
  selected: false
};

export const graphReducer: Reducer<IGraphState> = (
  state = INITIAL_STATE,
  action
) => {
  const { POST_SUCCESS, POST_FAILURE, GET_SUCCESS, GET_FAILURE, CLEAR, SELECT, UNSELECT } = GraphTypes;

  switch (action.type) {
    case POST_SUCCESS:
    case GET_SUCCESS:
    case CLEAR:
      return {
        data: action.payload,
        error: false,
        selected: false
      };

    case POST_FAILURE:
    case GET_FAILURE:
      return {
        data: action.payload,
        error: true,
        selected: false
      };
    
    case SELECT: 
      return {
        ...state,
        selected: true
      }
    
    case UNSELECT: 
      return {
        ...state,
        selected: false
      }
    
    default:
      return state;
  }
};

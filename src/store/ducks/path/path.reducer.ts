import { Reducer } from "redux";
import { PathState, PathTypes} from "./path.types";

const INITIAL_STATE: PathState = {
  data: null,
  error: false,
};

export const pathReducer: Reducer<PathState> = (
  state = INITIAL_STATE,
  action
) => {
  const { GET_SUCCESS, GET_FAILURE } = PathTypes;

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

import { Reducer } from "redux";
import { ISelectedGraphState, SelectedGraphTypes } from "./selectedGraph.types";

const INITIAL_STATE: ISelectedGraphState = {
  id: null,
};

export const selectedGraphReducer: Reducer<ISelectedGraphState> = (
  state = INITIAL_STATE,
  action
) => {
  const { SELECT } = SelectedGraphTypes;

  switch (action.type) {
    case SELECT:
      return {
        id: action.payload,
      };

    default:
      return state;
  }
};

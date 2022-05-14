import { Action, Dispatch } from "redux";
import { getGraph, postGraph } from "../../../services/api";

import { IGraph, GraphTypes } from "./graph.types";

export const postGraphRequest =
  (graph: IGraph) => async (dispatch: Dispatch<Action>) => {
    try {
      const res = await postGraph(graph);
      dispatch(postGraphSuccess(res.data));
    } catch (error) {
      dispatch(postGraphFailure());
    }
  };

const postGraphSuccess = (graph: IGraph) => {
  return {
    type: GraphTypes.POST_SUCCESS,
    payload: graph,
  };
};

const postGraphFailure = () => {
  return {
    type: GraphTypes.POST_FAILURE,
    payload: null,
  };
};

export const getGraphRequest =
  (id: number) => async (dispatch: Dispatch<Action>) => {
    try {
      const res = await getGraph(id);
      dispatch(getGraphSuccess(res.data));
    } catch (error) {
      dispatch(getGraphFailure());
    }
  };

const getGraphSuccess = (graph: IGraph) => {
  return {
    type: GraphTypes.GET_SUCCESS,
    payload: graph,
  };
};

const getGraphFailure = () => {
  return {
    type: GraphTypes.GET_FAILURE,
    payload: null,
  };
};
import { Action, Dispatch } from "redux";
import { getGraph, postGraph } from "../../../services/api";
import {
  getGraphFailure,
  getGraphSuccess,
  postGraphFailure,
  postGraphSuccess,
} from "./graph.actions";

import { IGraph } from "./graph.types";

export const postGraphRequest =
  (graph: IGraph) => async (dispatch: Dispatch<Action>) => {
    try {
      const res = await postGraph(graph);
      dispatch(postGraphSuccess(res.data));
    } catch (error) {
      dispatch(postGraphFailure());
    }
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

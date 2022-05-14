import { getGraph, postGraph } from "../../../services/api";
import { AppThunk } from "../../store";
import { getGraphFailure, getGraphSuccess, postGraphFailure, postGraphSuccess } from "./graph.slice";
import { IGraph } from "./graph.types";

export const postGraphRequest =
  (graph: IGraph): AppThunk =>
  async (dispatch) => {
    try {
      const res = await postGraph(graph);
      dispatch(postGraphSuccess(res.data));
    } catch (error) {
      dispatch(postGraphFailure());
    }
  };

export const getGraphRequest =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      const res = await getGraph(id);
      dispatch(getGraphSuccess(res.data));
    } catch (error) {
      dispatch(getGraphFailure());
    }
  };

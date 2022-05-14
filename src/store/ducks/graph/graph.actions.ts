import { IGraph, GraphTypes } from "./graph.types";

export const postGraphSuccess = (graph: IGraph) => {
  return {
    type: GraphTypes.POST_SUCCESS,
    payload: graph,
  };
};

export const postGraphFailure = () => {
  return {
    type: GraphTypes.POST_FAILURE,
    payload: null,
  };
};

export const getGraphSuccess = (graph: IGraph) => {
  return {
    type: GraphTypes.GET_SUCCESS,
    payload: graph,
  };
};

export const getGraphFailure = () => {
  return {
    type: GraphTypes.GET_FAILURE,
    payload: null,
  };
};

export const clearGraph = () => {
  return {
    type: GraphTypes.CLEAR,
    payload: null,
  };
};
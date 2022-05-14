import {  SelectedGraphTypes } from "./selectedGraph.types";

export const selectGraphId = (id: number) => {
  return {
    type: SelectedGraphTypes.SELECT,
    payload: id,
  };
};
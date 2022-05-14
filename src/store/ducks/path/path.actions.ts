import {  PathTypes, IPath } from "./path.types";

export const getMinRouteSuccess = (path: IPath) => {
  return {
    type: PathTypes.GET_SUCCESS,
    payload: path,
  };
};

export const getMinRouteFailure = () => {
  return {
    type: PathTypes.GET_FAILURE,
    payload: null,
  };
};

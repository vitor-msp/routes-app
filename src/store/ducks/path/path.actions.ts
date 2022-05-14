import { Action, Dispatch } from "redux";
import { getMinRoute } from "../../../services/api";

import { GetMinRouteDTO, PathTypes, IPath } from "./path.types";

export const getMinRouteRequest =
  (dto: GetMinRouteDTO) => async (dispatch: Dispatch<Action>) => {
    try {
      const res = await getMinRoute(dto);
      dispatch(getMinRouteSuccess(res.data));
    } catch (error) {
      dispatch(getMinRouteFailure());
    }
  };

const getMinRouteSuccess = (path: IPath) => {
  return {
    type: PathTypes.GET_SUCCESS,
    payload: path,
  };
};

const getMinRouteFailure = () => {
  return {
    type: PathTypes.GET_FAILURE,
    payload: null,
  };
};

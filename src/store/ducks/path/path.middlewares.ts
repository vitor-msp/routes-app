import { Action, Dispatch } from "redux";
import { getMinRoute } from "../../../services/api";
import { getMinRouteFailure, getMinRouteSuccess } from "./path.actions";

import { GetMinRouteDTO } from "./path.types";

export const getMinRouteRequest =
  (dto: GetMinRouteDTO) => async (dispatch: Dispatch<Action>) => {
    try {
      const res = await getMinRoute(dto);
      dispatch(getMinRouteSuccess(res.data));
    } catch (error) {
      dispatch(getMinRouteFailure());
    }
  };
import { getMinRoute } from "../../../services/api";
import { AppThunk } from "../../store";
import { getMinRouteFailure, getMinRouteSuccess } from "./path.slice";

import { GetMinRouteDTO } from "./path.types";

export const getMinRouteRequest =
  (dto: GetMinRouteDTO): AppThunk =>
  async (dispatch) => {
    try {
      const res = await getMinRoute(dto);
      dispatch(getMinRouteSuccess(res.data));
    } catch (error) {
      dispatch(getMinRouteFailure());
    }
  };
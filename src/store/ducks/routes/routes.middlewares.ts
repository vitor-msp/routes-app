import { Action, Dispatch } from "redux";
import { getRoutes } from "../../../services/api";
import { getRoutesFailure, getRoutesSuccess } from "./routes.actions";

import { GetRoutesDTO } from "./routes.types";

export const getRoutesRequest =
  (dto: GetRoutesDTO) => async (dispatch: Dispatch<Action>) => {
    try {
      const res = await getRoutes(dto);
      dispatch(getRoutesSuccess(res.data));
    } catch (error) {
      dispatch(getRoutesFailure());
    }
  };
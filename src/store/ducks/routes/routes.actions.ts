import { Action, Dispatch } from "redux";
import { getRoutes } from "../../../services/api";

import { GetRoutesDTO, Routes, RoutesTypes } from "./routes.types";

export const getRoutesRequest =
  (dto: GetRoutesDTO) => async (dispatch: Dispatch<Action>) => {
    try {
      const res = await getRoutes(dto);
      dispatch(getRoutesSuccess(res.data));
    } catch (error) {
      dispatch(getRoutesFailure());
    }
  };

const getRoutesSuccess = (routes: Routes) => {
  return {
    type: RoutesTypes.GET_SUCCESS,
    payload: routes,
  };
};

const getRoutesFailure = () => {
  return {
    type: RoutesTypes.GET_FAILURE,
    payload: null,
  };
};

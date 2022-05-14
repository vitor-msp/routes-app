import { getRoutes } from "../../../services/api";
import { AppThunk } from "../../store";
import { getRoutesFailure, getRoutesSuccess } from "./routes.slice";

import { GetRoutesDTO } from "./routes.types";

export const getRoutesRequest =
  (dto: GetRoutesDTO): AppThunk =>
  async (dispatch) => {
    try {
      const res = await getRoutes(dto);
      dispatch(getRoutesSuccess(res.data));
    } catch (error) {
      dispatch(getRoutesFailure());
    }
  };
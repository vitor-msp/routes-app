import { IRoutes, RoutesTypes } from "./routes.types";

export const getRoutesSuccess = (routes: IRoutes) => {
  return {
    type: RoutesTypes.GET_SUCCESS,
    payload: routes,
  };
};

export const getRoutesFailure = () => {
  return {
    type: RoutesTypes.GET_FAILURE,
    payload: null,
  };
};

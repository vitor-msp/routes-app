export enum RoutesTypes {
  GET_SUCCESS = "GET_SUCCESS",
  GET_FAILURE = "GET_FAILURE",
}

interface IRoute {
  route: string;
  stops: number;
}

export interface IRoutes {
  routes: IRoute[];
}

export interface GetRoutesDTO {
  graphId: number;
  town1: string;
  town2: string;
  maxStops?: number;
}

export interface IRoutesState {
  readonly data: IRoutes | null;
  readonly error: boolean;
}

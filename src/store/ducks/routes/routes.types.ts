export enum RoutesTypes {
  GET_SUCCESS = "GET_SUCCESS",
  GET_FAILURE = "GET_FAILURE",
}

interface Route {
  route: string;
  stops: number;
}

export interface Routes {
  routes: Route[];
}

export interface GetRoutesDTO {
  graphId: number;
  town1: string;
  town2: string;
  maxStops?: number;
}

export interface RoutesState {
  readonly data: Routes | null;
  readonly error: boolean;
}

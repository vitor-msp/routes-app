export interface IRoute {
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
  data: IRoutes | null;
  error: boolean;
}

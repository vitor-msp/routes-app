export enum PathTypes {
  GET_SUCCESS = "GET_SUCCESS",
  GET_FAILURE = "GET_FAILURE",
}

export interface Path {
  distance: number;
  path: string[];
}

export interface GetMinRouteDTO {
  graphId: number;
  town1: string;
  town2: string;
}

export interface PathState {
  readonly data: Path | null;
  readonly error: boolean;
}

export enum PathTypes {
  GET_SUCCESS = "GET_SUCCESS",
  GET_FAILURE = "GET_FAILURE",
}

export interface IPath {
  distance: number;
  path: string[];
}

export interface GetMinRouteDTO {
  graphId: number;
  town1: string;
  town2: string;
}

export interface IPathState {
  readonly data: IPath | null;
  readonly error: boolean;
}

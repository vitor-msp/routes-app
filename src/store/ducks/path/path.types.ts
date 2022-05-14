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
  data: IPath | null;
  error: boolean;
}

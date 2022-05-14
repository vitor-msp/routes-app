export enum GraphTypes {
  POST_SUCCESS = "POST_SUCCESS",
  POST_FAILURE = "POST_FAILURE",
  GET_SUCCESS = "GET_SUCCESS",
  GET_FAILURE = "GET_FAILURE",
  CLEAR = "CLEAR",
}

export interface IEdge {
  source: string;
  target: string;
  distance: number;
}

export interface IGraph {
  id?: number;
  data: IEdge[];
}

export interface IGraphState {
  readonly data: IGraph | null;
  readonly error: boolean;
}

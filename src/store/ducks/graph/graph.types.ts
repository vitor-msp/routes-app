export enum GraphTypes {
  POST_SUCCESS = "POST_SUCCESS",
  POST_FAILURE = "POST_FAILURE",
  GET_SUCCESS = "GET_SUCCESS",
  GET_FAILURE = "GET_FAILURE",
}

interface Edge {
  source: string;
  target: string;
  distance: number;
}

export interface Graph {
  id?: number;
  data: Edge[];
}

export interface GraphState {
  readonly data: Graph | null;
  readonly error: boolean;
}

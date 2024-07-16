export interface IEdge {
  source: string;
  target: string;
  distance: number;
}

export interface IGraph {
  id?: number;
  edges: IEdge[];
}

export interface IGraphState {
  data: IGraph | null;
  error: boolean;
  selected: boolean;
}

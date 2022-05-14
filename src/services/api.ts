import { IGraph } from "../store/ducks/graph/graph.types";
import { GetMinRouteDTO } from "../store/ducks/path/path.types";
import { GetRoutesDTO } from "../store/ducks/routes/routes.types";

const auxGraph: IGraph = {
  id: 1,
  data: [
    { source: "A", target: "B", distance: 8 },
    { source: "A", target: "B", distance: 8 },
  ],
};

export const postGraph = (graph: IGraph) => {
  return {
    data: { id: 1, ...graph },
  };
};

export const getGraph = (id: number) => {
  return { data: auxGraph };
};


export const getRoutes = (dto: GetRoutesDTO) => {
  return {
    data: {
      routes: [
        {
          route: "ABC",
          stops: 2,
        },
        {
          route: "ADC",
          stops: 2,
        },
        {
          route: "AEBC",
          stops: 3,
        },
      ],
    },
  };
};
export const getMinRoute = (dto: GetMinRouteDTO) => {
  return {
    data: {
      distance: 8,
      path: ["A", "B", "C"],
    },
  };
};

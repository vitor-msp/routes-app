import axios from "axios";
import { IGraph } from "../store/ducks/graph/graph.types";
import { GetMinRouteDTO } from "../store/ducks/path/path.types";
import { GetRoutesDTO } from "../store/ducks/routes/routes.types";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});

export const postGraph = async (graph: IGraph) => {
  return await api.post("/graph", graph);
};

export const getGraph = async (id: number) => {
  return await api.get(`/graph/${id}`);
};

export const getRoutes = async (dto: GetRoutesDTO) => {
  const {graphId, town1, town2} = dto
  return await api.post(
    `routes/${graphId}/from/${town1}/to/${town2}?maxStops=${dto.maxStops ?? undefined}`
  );
};

export const getMinRoute = async (dto: GetMinRouteDTO) => {
  const {graphId, town1, town2} = dto
  return await api.post(
    `distance/${graphId}/from/${town1}/to/${town2}`
  );
};

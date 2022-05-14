import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { unselectGraph } from "../../store/ducks/graph/graph.slice";
import { getRoutesRequest } from "../../store/ducks/routes/routes.middlewares";
import { GetRoutesDTO } from "../../store/ducks/routes/routes.types";
import { AppDispatch, RootState } from "../../store/store";
import { Route } from "../Route";

export const GetRoutesPage = () => {
  const graph = useSelector((state: RootState) => state.graph);
  const pathSel = useSelector((state: RootState) => state.path);
  const routesSel = useSelector((state: RootState) => state.routes);
  const [reqDTO, setReqDTO] = useState<GetRoutesDTO>({
    graphId: graph.selected ? graph.data!.id! : 0,
    town1: "",
    town2: "",
    maxStops: undefined,
  });
  const dispatch = useDispatch<AppDispatch>();
  const routes = useSelector((state: RootState) => state.routes);
  let counter = 0;
  const [sources, setSources] = useState<string[]>([]);
  const [targets, setTargets] = useState<string[]>([]);

  const getRoutes = () => {
    dispatch(getRoutesRequest(reqDTO));
  };

  const editGraphId = () => {
    dispatch(unselectGraph());
  };

  useEffect(() => {
    if (graph.selected) {
      if (sources.length === 0) getSourcesFromGraph();
      if (targets.length === 0) getTargetsFromGraph();
    }
  }, []);

  useEffect(() => {
    console.log("graph", graph);
    console.log("pathSel", pathSel);
    console.log("routesSel", routesSel);
  }, [graph, pathSel, routesSel]);

  const getSourcesFromGraph = () => {
    setSources(graph.data?.data.map(({ source }) => source)!);
  };

  const getTargetsFromGraph = () => {
    setTargets(graph.data?.data.map(({ target }) => target)!);
  };

  return (
    <div>
      GetRoutesPage
      <br />
      <NavLink to={"/"}>Home</NavLink>
      <br />
      <input
        type="number"
        min={0}
        readOnly={graph.selected}
        value={reqDTO.graphId}
        onChange={(e) => setReqDTO({ ...reqDTO, graphId: +e.target.value })}
      />
      <br />
      {graph.selected && <button onClick={editGraphId}>editar id</button>}
      <br />
      {graph.selected ? (
        <select
          name="sources"
          onChange={(e) => setReqDTO({ ...reqDTO, town1: e.target.value })}
        >
          <option key={"default"} value={""}>
            {"--town1--"}
          </option>
          {sources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          size={1}
          maxLength={1}
          value={reqDTO.town1}
          onChange={(e) => setReqDTO({ ...reqDTO, town1: e.target.value })}
        />
      )}
      <br />
      {graph.selected ? (
        <select
          name="targets"
          onChange={(e) => setReqDTO({ ...reqDTO, town2: e.target.value })}
        >
          <option key={"default"} value={""}>
            {"--town2--"}
          </option>
          {targets.map((target) => (
            <option key={target} value={target}>
              {target}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          size={1}
          maxLength={1}
          value={reqDTO.town2}
          onChange={(e) => setReqDTO({ ...reqDTO, town2: e.target.value })}
        />
      )}
      <br />
      <input
        type="number"
        min={0}
        value={reqDTO.maxStops ?? ""}
        onChange={(e) => setReqDTO({ ...reqDTO, maxStops: +e.target.value })}
      />
      <br />
      <button onClick={getRoutes}>getRoutes</button>
      <br />
      <div>
        {!routes.error &&
          routes.data?.routes?.map(({ route, stops }) => (
            <Route key={counter++} route={route} stops={stops} />
          ))}
      </div>
      <div>{routes.error && <span>Graph/Citie(s) Not Found</span>}</div>
    </div>
  );
};

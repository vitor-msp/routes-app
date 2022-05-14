import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearGraph } from "../../store/ducks/graph/graph.actions";
import { getGraphRequest } from "../../store/ducks/graph/graph.middleware";
import { selectGraphId } from "../../store/ducks/selectedGraph/selectedGraph.actions";
import { AppDispatch, RootState } from "../../store/store";
import { Edge } from "../Edge";

export const ViewGraphPage = () => {
  const [graphId, setGraphId] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const graph = useSelector((state: RootState) => state.graph);
  let counter = 0;
  const navigate = useNavigate();

  const viewGraph = async () => {
    await dispatch(getGraphRequest(graphId));
  };

  useEffect(() => {
    (async () => {
      await dispatch(clearGraph());
    })();
  }, []);

  const getRoutes = async () => {
    await dispatch(selectGraphId(graph.data!.id!));
    navigate("/get-routes");
  };
  
  const getMinRoute = async () => {
    await dispatch(selectGraphId(graph.data!.id!));
    navigate("/get-min-route");
  };

  return (
    <div>
      ViewGraphPage
      <br />
      <NavLink to={"/"}>Home</NavLink>
      <br />
      <input
        type="number"
        min={0}
        value={graphId}
        onChange={(e) => setGraphId(+e.target.value)}
      />
      <br />
      <button onClick={viewGraph}>View</button>
      <br />
      <div>
        {!graph.error && graph.data && (
          <>
            {graph.data?.id && (
              <div>
                <button onClick={getRoutes}>get routes</button>
                <button onClick={getMinRoute}>get min route</button>
              </div>
            )}

            <div>
              {graph.data?.data?.map(({ source, target, distance }) => (
                <Edge
                  key={counter++}
                  editable={false}
                  source={source}
                  target={target}
                  distance={distance}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div>{graph.error && <span>Graph Not Found</span>}</div>
    </div>
  );
};

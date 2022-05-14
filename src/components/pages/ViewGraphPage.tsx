import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getGraphRequest } from "../../store/ducks/graph/graph.middleware";
import { AppDispatch, RootState } from "../../store/store";
import { BtnsGraphOpts } from "../BtnsGraphOpts";
import { Edge } from "../Edge";

export const ViewGraphPage = () => {
  const [graphId, setGraphId] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const graph = useSelector((state: RootState) => state.graph);
  let counter = 0;

  const viewGraph = () => {
    dispatch(getGraphRequest(graphId));
    setShowResult(true);
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
        {showResult && !graph.error && graph.data && (
          <>
            {graph.data?.id && <BtnsGraphOpts />}

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

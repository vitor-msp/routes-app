import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGraphRequest } from "../../store/ducks/graph/graph.middleware";
import { AppDispatch, RootState } from "../../store/store";
import { Edge } from "../Edge";

export const ViewGraphPage = () => {
  const [graphId, setGraphId] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const graph = useSelector((state: RootState) => state.graph);
  let counter = 0;

  const viewGraph = async () => {
    await dispatch(getGraphRequest(graphId));
  };

  return (
    <div>
      ViewGraphPage
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
        {!graph.error &&
          graph.data &&
          graph.data?.data.map(({ source, target, distance }) => (
            <Edge
              key={counter++}
              editable={false}
              source={source}
              target={target}
              distance={distance}
            />
          ))}
      </div>
      <div>{graph.error && <span>Graph Not Found</span>}</div>
    </div>
  );
};

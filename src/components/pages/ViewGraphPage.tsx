import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getGraphRequest } from "../../store/ducks/graph/graph.middleware";
import { AppDispatch, RootState } from "../../store/store";
import { BtnsGraphOpts } from "../BtnsGraphOpts";
import { Edge } from "../Edge";

export const ViewGraphPage = () => {
  const [graphId, setGraphId] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const graph = useSelector((state: RootState) => state.graph);
  let counter = 0;

  const viewGraph = async () => {
    await dispatch(getGraphRequest(graphId));
    setShowResult(true);
  };

  return (
    <div>
      <h3 className="text-light">{">> View Graph"}</h3>
      <NavLink
        to={"/"}
        className="btn btn-outline-success text-center border border-dark rounded bg-light bg-opacity-25"
      >
        {"<- Home"}
      </NavLink>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          viewGraph();
        }}
      >
        <div className="my-3 d-flex">
          <input
            type="number"
            min={1}
            required={true}
            value={graphId}
            onChange={(e) => setGraphId(+e.target.value)}
            className="form-control w-auto"
          />
          <input type={"submit"} value={"View"} className="btn btn-outline-light mx-2"/>
        </div>
      </form>
      <div>
        {showResult && !graph.error && graph.data && (
          <>
            {graph.data?.id && <BtnsGraphOpts />}

            <div>
              {graph.data?.edges?.map(({ source, target, distance }) => (
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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { postGraphRequest } from "../../store/ducks/graph/graph.middleware";
import { IEdge } from "../../store/ducks/graph/graph.types";
import { AppDispatch, RootState } from "../../store/store";
import { BtnsGraphOpts } from "../BtnsGraphOpts";
import { Edge } from "../Edge";

class EdgeImpl implements IEdge {
  constructor(
    public source: string,
    public target: string,
    public distance: number,
    public index: number
  ) {}
}

export const RegisterGraphPage = () => {
  const [edges, setEdges] = useState<EdgeImpl[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const graph = useSelector((state: RootState) => state.graph);
  const [showResult, setShowResult] = useState(false);

  const createNewEdge = () => {
    setEdges([...edges, new EdgeImpl("", "", 0, edges.length)]);
  };

  const removeLastEdge = () => {
    const newEdges = Object.assign([], edges);
    newEdges.pop();
    setEdges(newEdges);
  };

  const registerGraph = async () => {
    await dispatch(
      postGraphRequest({
        edges: edges,
      })
    );
    setShowResult(true);
  };

  return (
    <div>
      <h3 className="text-light">{">> Register Graph"}</h3>
      <NavLink
        to={"/"}
        className="btn btn-outline-success text-center border border-dark rounded bg-light bg-opacity-25"
      >
        {"<- Home"}
      </NavLink>
      <br />
      {showResult && graph.data?.id && (
        <div className="d-flex my-3">
          <input type="number" readOnly={true} value={graph.data?.id} className="form-control w-auto"/>
          <BtnsGraphOpts />
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          registerGraph();
        }}
      >
        <div className="my-2 d-flex justify-content-between">
          <input
            type={"submit"}
            value={"Register"}
            className="btn btn-outline-light"
          />
          <div>
            <button
              type="button"
              onClick={createNewEdge}
              className="btn btn-outline-light px-3 mx-2"
            >
              +
            </button>
            <button
              type="button"
              onClick={removeLastEdge}
              className="btn btn-outline-light px-3 "
            >
              -
            </button>
          </div>
        </div>
        <div className="my-2">
          {edges.length !== 0 &&
            edges.map(({ source, target, distance, index }) => (
              <Edge
                key={index}
                editable={true}
                index={index!}
                source={source}
                target={target}
                distance={distance}
                handleChange={(index, edge) => {
                  const { source, target, distance } = edge;
                  edges[index] = {
                    ...edges[index],
                    source: source!,
                    target: target!,
                    distance: distance!,
                  };
                }}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

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

  const registerGraph = async () => {
    await dispatch(
      postGraphRequest({
        data: edges,
      })
    );
    setShowResult(true);
  };

  return (
    <div>
      RegisterGraphPage
      <br />
      <NavLink to={"/"}>Home</NavLink>
      <br />
      <button onClick={createNewEdge}>+</button>
      <br />
      <br />
      {showResult && graph.data?.id && (
        <>
          <input type="number" readOnly={true} value={graph.data?.id} />
          <BtnsGraphOpts />
        </>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          registerGraph();
        }}
      >
        <br />
        <input type={"submit"} value={"Register"} />
        <div>
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
                    source: source!,
                    target: target!,
                    distance: distance!,
                    index: edges[index].index,
                  };
                }}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

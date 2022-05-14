import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearGraph } from "../../store/ducks/graph/graph.actions";
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
  const dispatch: AppDispatch = useDispatch();
  const graph = useSelector((state: RootState) => state.graph);

  const createNewEdge = () => {
    setEdges([...edges, new EdgeImpl("", "", 0, edges.length)]);
  };

  const registerGraph = async () => {
    await dispatch(
      postGraphRequest({
        data: edges,
      })
    );
  };

  useEffect(() => {
    (async () => {
      await dispatch(clearGraph());
    })();
  }, []);

  return (
    <div>
      RegisterGraphPage
      <br />
      <NavLink to={"/"}>Home</NavLink>
      <br />
      <button onClick={createNewEdge}>+</button>
      <br />
      <button onClick={registerGraph}>Register</button>
      <br />
      <br />
      {graph.data?.id && (
        <>
          <input type="number" readOnly={true} value={graph.data?.id} />
          <BtnsGraphOpts id={graph.data.id} />
        </>
      )}
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
    </div>
  );
};

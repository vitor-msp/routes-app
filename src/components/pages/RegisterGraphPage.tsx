import { useState } from "react";
import { IEdge } from "../../store/ducks/graph/graph.types";
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

  const createNewEdge = () => {
    setEdges([...edges, new EdgeImpl("", "", 0, edges.length)]);
  };

  const registerGraph = () => {
    console.log(edges);
  };

  return (
    <div>
      RegisterGraphPage
      <br />
      <button onClick={createNewEdge}>+</button>
      <br />
      <button onClick={registerGraph}>Register</button>
      <br />
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

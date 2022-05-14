import { useEffect, useState } from "react";

interface IEdge {
  source?: string;
  target?: string;
  distance?: number;
}

type EdgeProps = IEdge & {
  editable: boolean;
  index?: number;
  handleChange?: (index: number, edge: IEdge) => any;
};

export const Edge: React.FC<EdgeProps> = (props) => {
  const { source, target, distance, editable, index, handleChange } = props;
  const defaulEdgeValues: IEdge = {
    source,
    target,
    distance,
  };
  const [edgeValues, setEdgeValues] = useState(defaulEdgeValues);

  useEffect(() => {
    if (editable) handleChange!(index!, edgeValues);
  }, [edgeValues]);

  useEffect(() => {
    setEdgeValues({ ...edgeValues, source, target, distance });
  }, [source, target, distance]);

  return (
    <div style={{ border: "1px solid red" }}>
      <div>
        <label>Source:</label>
        <input
          type={"text"}
          size={1}
          maxLength={1}
          readOnly={!editable}
          value={edgeValues.source}
          onChange={(event) => {
            setEdgeValues({ ...edgeValues, source: event.target.value });
          }}
        />
      </div>

      <div>
        <label>Target:</label>
        <input
          type={"text"}
          size={1}
          maxLength={1}
          readOnly={!editable}
          value={edgeValues.target}
          onChange={(event) => {
            setEdgeValues({ ...edgeValues, target: event.target.value });
          }}
        />
      </div>

      <div>
        <label>Distance:</label>
        <input
          type={"number"}
          min={0}
          step={1}
          readOnly={!editable}
          value={edgeValues.distance}
          onChange={(event) => {
            setEdgeValues({ ...edgeValues, distance: +event.target.value });
          }}
        />
      </div>
    </div>
  );
};

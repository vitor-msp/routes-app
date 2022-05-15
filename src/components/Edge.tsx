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
    <div className="my-3 border rounded">
      <div className="form-group row my-1">
        <label className="col-1 text-end">Source:</label>
        <input
          type={"text"}
          size={1}
          maxLength={1}
          required={true}
          readOnly={!editable}
          value={edgeValues.source}
          onChange={(event) => {
            setEdgeValues({ ...edgeValues, source: event.target.value });
          }}
          className="form-control w-auto col-11"
        />
      </div>

      <div className="form-group row my-1">
        <label className="col-1 text-end">Target:</label>
        <input
          type={"text"}
          size={1}
          maxLength={1}
          required={true}
          readOnly={!editable}
          value={edgeValues.target}
          onChange={(event) => {
            setEdgeValues({ ...edgeValues, target: event.target.value });
          }}
          className="form-control w-auto col-11"
        />
      </div>

      <div className="form-group row my-1">
        <label className="col-1 text-end">Distance:</label>
        <input
          type={"number"}
          min={1}
          step={1}
          required={true}
          readOnly={!editable}
          value={edgeValues.distance}
          onChange={(event) => {
            setEdgeValues({ ...edgeValues, distance: +event.target.value });
          }}
          className="form-control w-auto col-11"
        />
      </div>
    </div>
  );
};

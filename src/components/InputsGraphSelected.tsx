import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unselectGraph } from "../store/ducks/graph/graph.slice";
import { GetRoutesDTO } from "../store/ducks/routes/routes.types";
import { AppDispatch, RootState } from "../store/store";

interface Props {
  reqDTO: GetRoutesDTO;
  handleChange: (reqDTO: GetRoutesDTO) => any;
  showMaxStops: boolean;
}

export const InputsGraphSelected: React.FC<Props> = ({
  reqDTO,
  handleChange,
  showMaxStops,
}) => {
  const graph = useSelector((state: RootState) => state.graph);
  const dispatch = useDispatch<AppDispatch>();
  const [sources, setSources] = useState<string[]>([]);
  const [targets, setTargets] = useState<string[]>([]);

  const editGraphId = () => {
    dispatch(unselectGraph());
  };

  useEffect(() => {
    if (sources.length === 0) getSourcesFromGraph();
    if (targets.length === 0) getTargetsFromGraph();
  }, []);

  const getSourcesFromGraph = () => {
    const set = new Set<string>();
    graph.data?.data.forEach(({ source }) => set.add(source))!;
    setSources(Array.from<string>(set));
  };

  const getTargetsFromGraph = () => {
    const set = new Set<string>();
    graph.data?.data.forEach(({ target }) => set.add(target))!;
    setTargets(Array.from<string>(set));
  };

  return (
    <div className="d-flex my-3">
      <label>Graph Id:</label>
      <input
        type="number"
        min={1}
        required={true}
        readOnly={true}
        value={reqDTO.graphId}
        className="form-control w-auto mx-1"
      />

      <button type="button" onClick={editGraphId} className="btn btn-outline-light mx-1">
        editar id
      </button>

      <label>From:</label>
      <select
        name="sources"
        required={true}
        onChange={(e) => handleChange({ ...reqDTO, town1: e.target.value })}
        className="form-control w-auto mx-1"
      >
        <option key={"default"} value={""}>
          {"--town1--"}
        </option>
        {sources.map((source) => (
          <option key={source} value={source}>
            {source}
          </option>
        ))}
      </select>

      <label>To:</label>
      <select
        name="targets"
        required={true}
        onChange={(e) => handleChange({ ...reqDTO, town2: e.target.value })}
        className="form-control w-auto mx-1"
      >
        <option key={"default"} value={""}>
          {"--town2--"}
        </option>
        {targets.map((target) => (
          <option key={target} value={target}>
            {target}
          </option>
        ))}
      </select>

      {showMaxStops && (
        <>
          <label>Max Stops:</label>
          <input
            type="number"
            min={0}
            value={reqDTO.maxStops ?? ""}
            onChange={(e) =>
              handleChange({ ...reqDTO, maxStops: +e.target.value })
            }
            className="form-control w-auto mx-1"
          />
        </>
      )}
    </div>
  );
};

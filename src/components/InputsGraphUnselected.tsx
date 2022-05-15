import { GetRoutesDTO } from "../store/ducks/routes/routes.types";

interface Props {
  reqDTO: GetRoutesDTO;
  handleChange: (reqDTO: GetRoutesDTO) => any;
  showMaxStops: boolean;
}

export const InputsGraphUnselected: React.FC<Props> = ({
  reqDTO,
  handleChange,
  showMaxStops,
}) => {
  return (
    <div className="my-3 d-flex">
      <label>Graph Id:</label>
      <input
        type="number"
        min={1}
        required={true}
        value={reqDTO.graphId}
        onChange={(e) => handleChange({ ...reqDTO, graphId: +e.target.value })}
        className="form-control w-auto mx-1"
      />
      <label>From:</label>
      <input
        type="text"
        size={1}
        maxLength={1}
        required={true}
        value={reqDTO.town1}
        onChange={(e) => handleChange({ ...reqDTO, town1: e.target.value })}
        className="form-control w-auto mx-1"
      />
      <label>To:</label>
      <input
        type="text"
        size={1}
        maxLength={1}
        required={true}
        value={reqDTO.town2}
        onChange={(e) => handleChange({ ...reqDTO, town2: e.target.value })}
        className="form-control w-auto mx-1"
      />
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

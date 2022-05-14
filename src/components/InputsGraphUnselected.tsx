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
    <div>
      <input
        type="number"
        min={0}
        value={reqDTO.graphId}
        onChange={(e) => handleChange({ ...reqDTO, graphId: +e.target.value })}
      />
      <br />
      <input
        type="text"
        size={1}
        maxLength={1}
        value={reqDTO.town1}
        onChange={(e) => handleChange({ ...reqDTO, town1: e.target.value })}
      />
      <br />
      <input
        type="text"
        size={1}
        maxLength={1}
        value={reqDTO.town2}
        onChange={(e) => handleChange({ ...reqDTO, town2: e.target.value })}
      />
      {showMaxStops && (
        <>
          <br />
          <input
            type="number"
            min={0}
            value={reqDTO.maxStops ?? ""}
            onChange={(e) =>
              handleChange({ ...reqDTO, maxStops: +e.target.value })
            }
          />
        </>
      )}
    </div>
  );
};

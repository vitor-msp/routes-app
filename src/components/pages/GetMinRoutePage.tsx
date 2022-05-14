import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMinRouteRequest } from "../../store/ducks/path/path.actions";
import { GetMinRouteDTO } from "../../store/ducks/path/path.types";
import { AppDispatch, RootState } from "../../store/store";
import { Path } from "../Path";

export const GetMinRoutePage = () => {
  const [reqDTO, setReqDTO] = useState<GetMinRouteDTO>({
    graphId: 0,
    town1: "",
    town2: "",
  });
  const dispatch: AppDispatch = useDispatch();
  const path = useSelector((state: RootState) => state.path);

  const getMinRoute = async () => {
    await dispatch(getMinRouteRequest(reqDTO));
  };

  return (
    <div>
      GetMinRoutePage
      <br />
      <input
        type="number"
        min={0}
        value={reqDTO.graphId}
        onChange={(e) => setReqDTO({ ...reqDTO, graphId: +e.target.value })}
      />
      <br />
      <input
        type="text"
        size={1}
        maxLength={1}
        value={reqDTO.town1}
        onChange={(e) => setReqDTO({ ...reqDTO, town1: e.target.value })}
      />
      <br />
      <input
        type="text"
        size={1}
        maxLength={1}
        value={reqDTO.town2}
        onChange={(e) => setReqDTO({ ...reqDTO, town2: e.target.value })}
      />
      <br />
      <button onClick={getMinRoute}>getMInRoutes</button>
      <br />
      <div>{!path.error && path.data && <Path path={path.data!} />}</div>
    </div>
  );
};

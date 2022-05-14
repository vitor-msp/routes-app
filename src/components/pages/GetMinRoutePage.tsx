import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMinRouteRequest } from "../../store/ducks/path/path.middlewares";
import { GetMinRouteDTO } from "../../store/ducks/path/path.types";
import { AppDispatch, RootState } from "../../store/store";
import { Path } from "../Path";

export const GetMinRoutePage = () => {
  const selectedGraph = useSelector((state: RootState) => state.selectedGraph);
  const [reqDTO, setReqDTO] = useState<GetMinRouteDTO>({
    graphId: selectedGraph.id ?? 0,
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
      <NavLink to={"/"}>Home</NavLink>
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
      <div>
        {!path.error && path.data?.distance && path.data?.path && (
          <Path path={path.data} />
        )}
      </div>
      <div>{path.error && <span>Graph/Citie(s) Not Found</span>}</div>
    </div>
  );
};

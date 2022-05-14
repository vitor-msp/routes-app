import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoutesRequest } from "../../store/ducks/routes/routes.actions";
import { GetRoutesDTO } from "../../store/ducks/routes/routes.types";
import { AppDispatch, RootState } from "../../store/store";
import { Route } from "../Route";

export const GetRoutesPage = () => {
  const [reqDTO, setReqDTO] = useState<GetRoutesDTO>({
    graphId: 0,
    town1: "",
    town2: "",
    maxStops: undefined,
  });
  const dispatch: AppDispatch = useDispatch();
  const routes = useSelector((state: RootState) => state.routes);
  let counter = 0;

  const getRoutes = async () => {
    await dispatch(getRoutesRequest(reqDTO));
  };

  return (
    <div>
      GetRoutesPage
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
      <input
        type="number"
        min={0}
        value={reqDTO.maxStops ?? ""}
        onChange={(e) => setReqDTO({ ...reqDTO, maxStops: +e.target.value })}
      />
      <br />
      <button onClick={getRoutes}>getRoutes</button>
      <br />
      <div>
        {!routes.error &&
          routes.data?.routes.map(({ route, stops }) => (
            <Route key={counter++} route={route} stops={stops} />
          ))}
      </div>
    </div>
  );
};

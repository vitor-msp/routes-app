import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getRoutesRequest } from "../../store/ducks/routes/routes.middlewares";
import { GetRoutesDTO } from "../../store/ducks/routes/routes.types";
import { AppDispatch, RootState } from "../../store/store";
import { InputsGraphSelected } from "../InputsGraphSelected";
import { InputsGraphUnselected } from "../InputsGraphUnselected";
import { Route } from "../Route";

export const GetRoutesPage = () => {
  const graph = useSelector((state: RootState) => state.graph);
  const [reqDTO, setReqDTO] = useState<GetRoutesDTO>({
    graphId: graph.selected ? graph.data!.id! : 0,
    town1: "",
    town2: "",
    maxStops: undefined,
  });
  const dispatch = useDispatch<AppDispatch>();
  const routes = useSelector((state: RootState) => state.routes);
  let counter = 0;

  const getRoutes = () => {
    dispatch(getRoutesRequest(reqDTO));
  };

  return (
    <div>
      GetRoutesPage
      <br />
      <NavLink to={"/"}>Home</NavLink>
      <br />
      {graph.selected ? (
        <InputsGraphSelected
          reqDTO={reqDTO}
          handleChange={(data) => {
            setReqDTO(data);
          }}
        />
      ) : (
        <InputsGraphUnselected
          reqDTO={reqDTO}
          handleChange={(data) => {
            setReqDTO(data);
          }}
        />
      )}
      <br />
      <button onClick={getRoutes}>getRoutes</button>
      <br />
      <div>
        {!routes.error &&
          routes.data?.routes?.map(({ route, stops }) => (
            <Route key={counter++} route={route} stops={stops} />
          ))}
      </div>
      <div>{routes.error && <span>Graph/Citie(s) Not Found</span>}</div>
    </div>
  );
};

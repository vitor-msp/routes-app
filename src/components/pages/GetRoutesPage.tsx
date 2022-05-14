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
    graphId: graph.selected ? graph.data!.id! : 1,
    town1: "",
    town2: "",
    maxStops: undefined,
  });
  const dispatch = useDispatch<AppDispatch>();
  const routes = useSelector((state: RootState) => state.routes);
  const [showResult, setShowResult] = useState(false);
  let counter = 0;

  const getRoutes = async () => {
    await dispatch(getRoutesRequest(reqDTO));
    setShowResult(true);
  };

  return (
    <div>
      GetRoutesPage
      <br />
      <NavLink to={"/"}>Home</NavLink>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          getRoutes();
        }}
      >
        <br />
        {graph.selected ? (
          <InputsGraphSelected
            reqDTO={reqDTO}
            handleChange={(data) => {
              setReqDTO(data);
            }}
            showMaxStops={true}
          />
        ) : (
          <InputsGraphUnselected
            reqDTO={reqDTO}
            handleChange={(data) => {
              setReqDTO(data);
            }}
            showMaxStops={true}
          />
        )}
        <br />
        <input type={"submit"} value={"getRoutes"} />
      </form>
      <br />
      <div>
        {showResult &&
          !routes.error &&
          routes.data?.routes?.map(({ route, stops }) => (
            <Route key={counter++} route={route} stops={stops} />
          ))}
      </div>
      <div>
        {!routes.error && routes.data?.routes.length === 0 && (
          <span>None Routes Founded</span>
        )}
      </div>
      <div>{routes.error && <span>Graph/Citie(s) Not Found</span>}</div>
    </div>
  );
};

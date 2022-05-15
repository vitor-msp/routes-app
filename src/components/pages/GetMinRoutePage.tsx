import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMinRouteRequest } from "../../store/ducks/path/path.middlewares";
import { GetMinRouteDTO } from "../../store/ducks/path/path.types";
import { AppDispatch, RootState } from "../../store/store";
import { InputsGraphSelected } from "../InputsGraphSelected";
import { InputsGraphUnselected } from "../InputsGraphUnselected";
import { Path } from "../Path";

export const GetMinRoutePage = () => {
  const graph = useSelector((state: RootState) => state.graph);
  const [reqDTO, setReqDTO] = useState<GetMinRouteDTO>({
    graphId: graph.selected ? graph.data!.id! : 1,
    town1: "",
    town2: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const path = useSelector((state: RootState) => state.path);
  const [showResult, setShowResult] = useState(false);

  const getMinRoute = async () => {
    await dispatch(getMinRouteRequest(reqDTO));
    setShowResult(true);
  };

  return (
    <div>
      <h3 className="text-light">{">> Get Min Route Graph"}</h3>
      <NavLink
        to={"/"}
        className="btn btn-outline-success text-center border border-dark rounded bg-light bg-opacity-25"
      >
        {"<- Home"}
      </NavLink>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          getMinRoute();
        }}
      >
        {graph.selected ? (
          <InputsGraphSelected
            reqDTO={reqDTO}
            handleChange={(data) => {
              setReqDTO(data);
            }}
            showMaxStops={false}
          />
        ) : (
          <InputsGraphUnselected
            reqDTO={reqDTO}
            handleChange={(data) => {
              setReqDTO(data);
            }}
            showMaxStops={false}
          />
        )}
        <input
          type={"submit"}
          value={"Get Min Routes"}
          className="btn btn-outline-light"
        />
      </form>
      <div className="my-2">
        {showResult && !path.error && path.data && <Path path={path.data} />}
      </div>
      <div>{path.error && <span>Graph/Citie(s) Not Found</span>}</div>
    </div>
  );
};

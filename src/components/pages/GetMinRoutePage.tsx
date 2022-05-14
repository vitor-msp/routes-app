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
    graphId: graph.selected ? graph.data!.id! : 0,
    town1: "",
    town2: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const path = useSelector((state: RootState) => state.path);

  const getMinRoute = () => {
    dispatch(getMinRouteRequest(reqDTO));
  };

  return (
    <div>
      GetMinRoutePage
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

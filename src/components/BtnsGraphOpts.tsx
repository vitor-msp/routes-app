import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectGraph } from "../store/ducks/graph/graph.actions";
import { AppDispatch } from "../store/store";

export const BtnsGraphOpts = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const getRoutes = async () => {
    await dispatch(selectGraph());
    navigate("/get-routes");
  };

  const getMinRoute = async () => {
    await dispatch(selectGraph());
    navigate("/get-min-route");
  };

  return (
    <div>
      <button onClick={getRoutes}>get routes</button>
      <button onClick={getMinRoute}>get min route</button>
    </div>
  );
};

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectGraph } from "../store/ducks/graph/graph.slice";

export const BtnsGraphOpts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getRoutes = () => {
    dispatch(selectGraph());
    navigate("/get-routes");
  };

  const getMinRoute = () => {
    dispatch(selectGraph());
    navigate("/get-min-route");
  };

  return (
    <div>
      <button onClick={getRoutes}>get routes</button>
      <button onClick={getMinRoute}>get min route</button>
    </div>
  );
};

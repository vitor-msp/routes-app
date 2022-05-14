import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectGraphId } from "../store/ducks/selectedGraph/selectedGraph.actions";
import { AppDispatch } from "../store/store";

interface Props {
  id: number;
}

export const BtnsGraphOpts: React.FC<Props> = (props) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = props;

  const getRoutes = async () => {
    await dispatch(selectGraphId(id));
    navigate("/get-routes");
  };

  const getMinRoute = async () => {
    await dispatch(selectGraphId(id));
    navigate("/get-min-route");
  };

  return (
    <div>
      <button onClick={getRoutes}>get routes</button>
      <button onClick={getMinRoute}>get min route</button>
    </div>
  );
};

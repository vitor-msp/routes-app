import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="col-12 justify-content-center">
      <div className="row" style={{ minHeight: "100px" }}>
        <div className="d-flex col-6 col-sm-5 offset-sm-1 col-md-4 offset-md-2">
          <NavLink
            to={"/register-graph"}
            className="btn btn-outline-success text-center my-auto p-4 border border-dark rounded bg-light bg-opacity-25 w-100"
          >
            register graph
          </NavLink>
        </div>
        <div className="d-flex col-6 col-sm-5 col-md-4">
          <NavLink
            to={"/view-graph"}
            className="btn btn-outline-success text-center my-auto p-4 border border-dark rounded bg-light bg-opacity-25 w-100"
          >
            view graph
          </NavLink>
        </div>
      </div>
      <div className="row" style={{ minHeight: "100px" }}>
        <div className="d-flex col-6 col-sm-5 offset-sm-1 col-md-4 offset-md-2">
          <NavLink
            to={"/get-routes"}
            className="btn btn-outline-success text-center my-auto p-4 border border-dark rounded bg-light bg-opacity-25 w-100"
          >
            get routes from graph
          </NavLink>
        </div>
        <div className="d-flex col-6 col-sm-5 col-md-4">
          <NavLink
            to={"/get-min-route"}
            className="btn btn-outline-success text-center my-auto p-4 border border-dark rounded bg-light bg-opacity-25 w-100"
          >
            get min route from graph
          </NavLink>
        </div>
      </div>
    </div>
  );
};

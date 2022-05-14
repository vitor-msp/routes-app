import React from "react";
import { IRoute } from "../store/ducks/routes/routes.types";

export const Route: React.FC<IRoute> = (props) => {
  const { route, stops } = props;
  return (
    <div>
      <div>
        <strong>Route:</strong>
        <span>{route}</span>
      </div>

      <div>
        <strong>Stops:</strong>
        <span>{stops}</span>
      </div>
    </div>
  );
};

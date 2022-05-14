import React from "react";
import { IPath } from "../store/ducks/path/path.types";

interface PathProps {
  path: IPath;
}

export const Path: React.FC<PathProps> = (props) => {
  const { distance, path } = props.path;
  return (
    <div>
      <div>
        <strong>Distance:</strong>
        <span>{distance}</span>
      </div>

      <div>
        <strong>Path:</strong>
        <span>{path.join(" - ")}</span>
      </div>
    </div>
  );
};

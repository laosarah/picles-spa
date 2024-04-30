import { ReactNode } from "react";
import styless from "./Grid.module.css";

interface IGrid {
  children: ReactNode;
}

export function Grid({ children }: IGrid) {
  return <div className={styless.grid}>{children}</div>;
}

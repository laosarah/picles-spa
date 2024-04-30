import { ReactNode } from "react";
import styless from "./Panel.module.css";
import { Sidebar } from "../../common/Sidebar";

interface IPanel {
  children: ReactNode;
}

export function Panel({ children }: IPanel) {
  return (
    <div className={styless.panel}>
      <Sidebar />
      <main className={styless.content}>{children}</main>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "../../../components/common/Button";
import { Panel } from "../../../components/layout/Panel";

import styless from "./PetList.module.css";

export function PetList() {
  return (
    <Panel>
      <div className={styless.container}>
        <div className={styless.buttonNewPet}>
          <Link to="/admin/pets/new">
            <Button>Novo pet</Button>
          </Link>
        </div>
      </div>
    </Panel>
  );
}

import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import style from "./Shelter.module.css";

export function Shelter() {
  return (
    <Panel>
      <form className={style.container}>
        <Input label="Nome" />
        <Button type="submit">Salvar dados</Button>
      </form>
    </Panel>
  );
}

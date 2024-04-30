import { NavLink } from "react-router-dom";
import styless from "./Sidebar.module.css";
import { Toaster, toast } from "sonner";
import { useShelter } from "../../../hooks/useShelter";

export function Sidebar() {
  const { data } = useShelter();

  function validate(event: React.MouseEvent) {
    const canAccess = !!data?.shelterWhatsApp;

    if (!canAccess) {
      event.preventDefault();
      toast.error("Insira os dados do abrigo!");
    }
  }

  return (
    <>
      <nav className={styless.sidebar}>
        <NavLink
          className={({ isActive }) => (isActive ? styless.active : "")}
          to="/admin"
          end
        >
          Meu abrigo
        </NavLink>
        <NavLink
          onClick={validate}
          className={({ isActive }) => (isActive ? styless.active : "")}
          to="/admin/pets"
        >
          Pets
        </NavLink>
        <NavLink to="/">Sair</NavLink>
      </nav>
      <Toaster position="top-center" richColors={true} />
    </>
  );
}

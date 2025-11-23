import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col flex-1">
      <Cabecalho />
        <Outlet />
      <Rodape />
    </div>
  );
}

import { useState } from "react";
import DiaryForm from "./DiaryForm";
import ListaRegistro from "../pages/ListaRegistro";

export default function RegistroPage() {
  const [registros, setRegistros] = useState([]);

  function adicionarRegistro(novoRegistro) {
    setRegistros([...registros, novoRegistro]);
  }

  return (
    <div>

      

      <DiaryForm onSubmit={adicionarRegistro} />

      <ListaRegistro registros={registros} />

    </div>
  );
}

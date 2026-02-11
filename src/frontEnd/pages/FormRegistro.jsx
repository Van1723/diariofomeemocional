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

      
      {/* adiciona registro do forms */}
      <DiaryForm onSubmit={adicionarRegistro} />
          {/* lista registros */}
      <ListaRegistro registros={registros} />

    </div>
  );
}

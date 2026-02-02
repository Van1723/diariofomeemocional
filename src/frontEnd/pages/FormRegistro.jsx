import { useState } from "react";
import DiaryForm from "./DiaryForm";
import Header from "../components/Header";
import ListaRegistro from "../components/ListaRegistro";

export default function RegistroPage() {
  const [registros, setRegistros] = useState([]);

  function adicionarRegistro(novoRegistro) {
    setRegistros([...registros, novoRegistro]);
  }

  return (
    <div>

      <Header/>

      <DiaryForm onSubmit={adicionarRegistro} />

      <ListaRegistro registros={registros} />

    </div>
  );
}

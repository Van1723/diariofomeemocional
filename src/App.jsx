
import { useState } from "react";
import DiaryForm from "./frontEnd/components/DiaryForm";
import ListaRegistro from "./frontEnd/components/ListaRegistro";

function App() {
  const [registros, setRegistros] = useState([]);

  function adicionarRegistro(registro) {
    setRegistros([...registros, registro]);
  }

  return (
    <div>

      <DiaryForm onSubmit={adicionarRegistro} />

      <ListaRegistro registros={registros} />

    </div>
  );
}

export default App;


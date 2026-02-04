
import { Routes, Route } from "react-router-dom";
import Home from "./frontEnd/pages/Home";
import DiaryForm from "./frontEnd/pages/DiaryForm";
import ListaRegistro from "./frontEnd/pages/ListaRegistro";
import RegistroItem from "./frontEnd/pages/RegistroItem";
import { useState } from "react";

function App() {
 const [registros, setRegistros] = useState([]);
 
  function adicionarRegistro(novoRegistro) {
    setRegistros(prev => [...prev, novoRegistro]);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/diary"
          element={<DiaryForm onSubmit={adicionarRegistro} />}
        />
        <Route
          path="/lista"
          element={<ListaRegistro registros={registros} />}

        />
        <Route
          path="/registro/:id"
          element={<RegistroItem registros={registros} />}
        />
        <Route path="/registro" element={<p>Selecione um registro</p>} />



      </Routes>
    </>
  );
}
  

export default App;

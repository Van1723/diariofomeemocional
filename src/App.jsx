
import { Routes, Route } from "react-router-dom";
import Home from "./frontEnd/pages/Home";
import DiaryForm from "./frontEnd/pages/DiaryForm";
import ListaRegistro from "./frontEnd/pages/ListaRegistro";

function App() {
  return (
    <>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diary" element={<DiaryForm />} />
        <Route path="/lista" element={<ListaRegistro/>}/>
      </Routes>
    </>
  );
}

export default App;

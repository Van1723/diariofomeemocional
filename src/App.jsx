
import { Routes, Route } from "react-router-dom";
import Dashboard from "./frontEnd/pages/Dash";
import DiaryForm from "./frontEnd/pages/DiaryForm";
import ListaRegistro from "./frontEnd/pages/ListaRegistro";
import RegistroItem from "./frontEnd/pages/RegistroItem";
import FormRegistro from "./frontEnd/pages/FormRegistro";
import Navbar from "./frontEnd/components/Navbar";
import Login from "./frontEnd/pages/Login"
import { useAuth} from "./frontEnd/AuthContext"
import { useState, useEffect } from "react";
import PrivateRoute from "./frontEnd/pages/PrivateRoute";
import Footer from "./frontEnd/components/Footer";



function App() {
  const { user } = useAuth();
  const [registros, setRegistros] = useState(() => {
    const dadosSalvos = localStorage.getItem("registros");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

   useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
  }, [registros]);

  function adicionarRegistro(novoRegistro) {
    setRegistros((prev) => [...prev, novoRegistro]);
  }
  
  return (
    // css pra manter em colunas e flexivel
    <div className="app"style={{display:"flex", flexDirection:"column"}} >
      {/* barra de navegação */}
      {user && <Navbar />}
       {/* rotas das páginas */}
      <Routes>
       
       
        <Route
          path="/diary"
          element={ 
          <PrivateRoute>
            <DiaryForm onSubmit={adicionarRegistro} />
          </PrivateRoute>
           
          }
          />

         <Route
          path="/lista"
          element={
          <PrivateRoute>
           <ListaRegistro registros={registros} />
          </PrivateRoute>
          }
          />

         <Route
          path="/registro/:id"
          element={
          <PrivateRoute>
            <RegistroItem registros={registros} />
          </PrivateRoute>
          }
         />

         <Route 
         path="/formRegistro" element={
          <PrivateRoute>
              <FormRegistro />
          </PrivateRoute>
          }
          />


         <Route
            path="/dash"
            element={
              <PrivateRoute>
                <Dashboard registros={registros} />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />


       </Routes>
      <Footer/>
       

    </div>
    
  );
}

export default App;

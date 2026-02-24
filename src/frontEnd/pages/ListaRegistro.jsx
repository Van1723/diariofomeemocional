import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/global.css"
import "../components/list.css"

export default function ListaRegistro() {

  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const dadosSalvos =
      JSON.parse(localStorage.getItem("registros")) || [];
    setRegistros(dadosSalvos);
  }, []);

  return (
    <div className="tela">

      {registros.length === 0 ? (
        <p>Nenhum registro ainda.</p>
      ) : (
        registros.map((registro, index) => (
          <div className="list" key={index}>
            <p>Data: {registro.dataHora}</p>
            <p>Tipo de fome: {registro.tipoFome}</p>
            <p>Intensidade: {registro.intensidade}</p>
            <p>Sentiu Antes: {registro.sentiuAntes}</p>
            <p>Comeu Antes: {registro.comeuAntes}</p>
            <p>Comeu: {registro.comeu}</p>
            <p>Sentiu Depois: {registro.sentiuDepois}</p>
            <p>Contexto: {registro.contexto}</p>

            <Link to={`/registro/${index}`}>
              Ver registro
            </Link>
          </div>
        ))
      )}

    </div>
  );
}
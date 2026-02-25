import { useState, useEffect } from "react";
import CardHorarioPico from "../components/CardHorarioPico/index.jsx";
import CardIntensidade from "../components/CardIntensidade/index.jsx";
import SentimentosGrafico from "../components/SentimentosGrafico/index.jsx";
import  "../components/global.css"

function Dash() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const dadosSalvos =
      JSON.parse(localStorage.getItem("registros")) || [];
    setRegistros(dadosSalvos);
  }, []);

  return (
    <div className="dashboard">
      <div className="cards">
        <CardIntensidade registros={registros} />
        <CardHorarioPico registros={registros} />
      </div>
      <>
       <div className="graph">
          <SentimentosGrafico registros={registros} />
      </div>
       </>
    </div>
  );
}

export default Dash;
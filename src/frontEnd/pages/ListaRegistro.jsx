import  "../components/list.css"
import  "../components/global.css"

import { Link } from "react-router-dom";

export default function ListaRegistro({ registros }) {
  
 // se não há registros exibe nenhm resgistro caso contrario exibe todos dados
  if (!registros || registros.length === 0) {
    return (
      <div>
        <p>Nenhum registro</p>

       
      </div>
    );
  }
  else{
    return (
  <div>
    {registros.map((registro, index) => (
      <div  className="list" key={index}>
        <p>Data: {registro.dataHora}</p>
        <p>Tipo de fome: {registro.tipoFome}</p>
        <p>Intensidade: {registro.intensidade}</p>
        <p>Sentiu Antes {registro.sentiuAntes}</p>
        <p>Comeu Antes </p>{registro.comeuAntes}
        <p>Comeu: {registro.comeu}</p>
        <p>Sentiu Depois: {registro.sentiuDepois}</p>
        <p>Contexto: {registro.contexto}</p>
        
        


         {/* exibe o registro separado */}
        <Link to={`/registro/${index}`}>
          Ver registro
        </Link>
      </div>
    ))}
  </div>
);
  }

  




  
 



  
   



}
import { useParams } from "react-router-dom"; 
import  "../components/global.css"
import  "../components/list.css"

export default function RegistroItem({ registros = [] }) 
 {
   console.log("registros recebidos:", registros);
   // busca o id do registro
  const { id } = useParams();
  

  const registro = registros[id];
//  sem id, sem registro
  if (!registro) {
    return (
      <div>
        <p>Nenhum registro</p>
        
      </div>
    );
  }
//  caso encontre, exibe
  return (
    <div className="container-registros">
      <div className="quadrado">
        <p><strong>Data:</strong> {registro.dataHora}</p>
        <p><strong>Tipo:</strong> {registro.tipoFome}</p>
        <p><strong>Intensidade:</strong> {registro.intensidade}</p>

        <p><strong>Sentiu antes:</strong> {registro.sentiuAntes}</p>
        <p><strong>Comeu antes:</strong> {registro.comeuAntes}</p>
        <p><strong>Comeu:</strong> {registro.comeu}</p>
        <p><strong>Sentiu depois:</strong> {registro.sentiuDepois}</p>

        <p><strong>Contexto:</strong> {registro.contexto}</p>
      </div>
    </div>
  );
}


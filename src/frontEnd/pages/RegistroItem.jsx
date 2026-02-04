import { useParams, useNavigate } from "react-router-dom"; 

export default function RegistroItem({ registros = [] }) 
 {
   console.log("registros recebidos:", registros);
  const { id } = useParams();
  const navigate = useNavigate();

  const registro = registros[id];

  if (!registro) {
    return (
      <div>
        <p>Nenhum registro</p>
        <button onClick={() => navigate("/home")}>
          Voltar para Home
        </button>
      </div>
    );
  }

  return (
    <div className="preview">
      <p><strong>Data:</strong> {registro.dataHora}</p>
      <p><strong>Tipo:</strong> {registro.tipoFome}</p>
      <p><strong>Intensidade:</strong> {registro.intensidade}</p>

      <p><strong>Sentiu antes:</strong> {registro.sentiuAntes}</p>
      <p><strong>Comeu antes:</strong> {registro.comeuAntes}</p>
      <p><strong>Comeu:</strong> {registro.comeu}</p>
      <p><strong>Sentiu depois:</strong> {registro.sentiuDepois}</p>

      <p><strong>Contexto:</strong> {registro.contexto}</p>
    </div>
  );
}


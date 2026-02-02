import RegistroItem from "./RegistroItem";
import { useNavigate } from "react-router-dom";

export default function ListaRegistro({ registros = [] }) {
  const navigate = useNavigate();

  if (registros.length === 0) {
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
    <div>
      <h3>Histórico</h3>

      {registros.map((registro, index) => (
        <RegistroItem key={index} registro={registro} />
      ))}

      <button onClick={() => navigate("/home")}>
        Voltar para Home
      </button>
    </div>
  );
}

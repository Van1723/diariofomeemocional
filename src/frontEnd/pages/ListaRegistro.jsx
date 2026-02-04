
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <div key={index}>
        <Link to={`/registro/${index}`}>
          Ver registro
        </Link>
      </div>
    ))}
      <button onClick={() => navigate("/home")}>
        Voltar para Home
      </button>
    </div>
  );
}

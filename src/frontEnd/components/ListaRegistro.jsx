 import RegistroItem from "./RegistroItem";

export default function ListaRegistro({ registros }) {
  if (registros.length === 0) {
    return <p>Nenhum registro ainda.</p>;
  }

  return (
    <div>
      <h3>Histórico</h3>

      {registros.map((registro, index) => (
        <RegistroItem key={index} registro={registro} />
      ))}
    </div>
  );
}

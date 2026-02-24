import calcularHorarioPico from "../../../utils/horarioPico";




function CardHorarioPico({ registros }) {
  const horaPico = calcularHorarioPico(registros);

  return (
    <div className="card">
      <h3>⏰ Horário de Pico</h3>
      <p>{horaPico}</p>
    </div>
  );
}

export default CardHorarioPico;
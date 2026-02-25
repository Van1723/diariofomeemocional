import calcularHorarioPico from "../../../utils/horarioPico";




function CardHorarioPico({ registros }) {
  const horaPico = calcularHorarioPico(registros);

  return (
    <div className="card" id="horario">
      <h3>⏰<br/>Horário Pico</h3>
      <p>{horaPico}</p>
    </div>
  );
}

export default CardHorarioPico;
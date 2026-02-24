

const calcularHorarioPico = (registros) => {
  if (!Array.isArray(registros) || registros.length === 0) return "-";

  const contagemHoras = {};

  registros.forEach((r) => {
    if (!r.dataHora) return; // pula se não tem dataHora

    const date = new Date(r.dataHora);
    if (isNaN(date.getTime())) return; // pula se data inválida

    const hora = date.getHours();
    contagemHoras[hora] = (contagemHoras[hora] || 0) + 1;
  });

  if (Object.keys(contagemHoras).length === 0) return "-"; // se nada válido

  const horaPico = Object.entries(contagemHoras)
    .sort((a, b) => b[1] - a[1])[0][0];

  return `${horaPico}h`;
};

export default calcularHorarioPico;
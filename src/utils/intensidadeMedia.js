function calcularIntensidadeMedia(registros) {
  if (!Array.isArray(registros) || registros.length === 0) {
    return 0;
  }

  const soma = registros.reduce((total, registro) => {
    const valor = Number(registro.intensidade);

    if (isNaN(valor)) return total;

    return total + valor;
  }, 0);

  const media = soma / registros.length;

  return Number(media.toFixed(1));
  
}


export default calcularIntensidadeMedia;





function validationFormulario(registro) {
  const erros = {};

  if (!registro.tipoFome) {
    erros.tipoFome = "Selecione o tipo de fome";
  }

  if (registro.intensidade === null) {
  erros.intensidade = "Informe a intensidade";
}

  if (!registro.sentiuAntes) {
    erros.sentiuAntes = "Selecione como se sentia antes";
  }
  if (!registro.comeuAntes) {
    erros.comeuAntes = "Selecione o que comeu";
  }

  if (!registro.comeu) {
    erros.comeu = "Selecione o que comeu";
  }

  if (!registro.sentiuDepois) {
    erros.sentiuDepois = "Selecione como se sentiu depois";
  }

  if (!registro.contexto) {
    erros.contexto = "Informe o contexto";
  }

  return erros;
}

export default validationFormulario;
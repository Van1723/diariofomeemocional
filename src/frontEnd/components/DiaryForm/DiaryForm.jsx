import  { useState } from 'react';
import SelectInput from './SelectInput';
import NumberInput from './NumberInput';
import CheckboxGroup from './CheckboxGroup';
import TextareaInput from './TextareaInput';
import Button from './Button';
import './Global.css';


function DiaryForm() {
  const [tipoFome, setTipoFome] = useState("");
  const [intensidade, setIntensidade] = useState("");
  const [sentiuAntes, setSentiuAntes] = useState("");
  const [comeuAntes, setComeuAntes] = useState("");
  const [comeu, setComeu] = useState("");
  
  const [sentiuDepois, setSentiuDepois] = useState("");
  const [contexto, setContexto] = useState("");
  const [mostrarDados, setMostrarDados] = useState(false);

  
  const listaSentimentos = ["Ansioso(a)", "Triste", "Feliz", "Entediado(a)", 
    "Estressado(a)", "Calmo(a)", "Irritado(a)", "Culpado(a)"];

  const handleCheckboxChange = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarDados(true);
    const data = {
      dataHora: new Date().toISOString(),
      tipoFome,
      intensidade,
      comeuAntes,
      sentiuAntes,
      comeu,
      sentiuDepois,
      contexto
    };
    console.log("Dados do diário:", data);
    // Fazer POST aqui
  };

  return (
    <div>
      
    
      <form onSubmit={handleSubmit}>
        <h2>Diário da Fome Emocional</h2>

        <SelectInput
          label="Tipo de fome:"
        value={tipoFome}
        onChange={(e) => setTipoFome(e.target.value)}
        options={[
          { value: "fisica", label: "Física" },
          { value: "emocional", label: "Emocional" }
        ]}
        />

        <NumberInput
          label="Intensidade da fome (0 a 10):"
          value={intensidade}
          onChange={(e) => setIntensidade(e.target.value)}
          min="0"
          max="10"
        />

        <CheckboxGroup
          legend="O que comeu antes do episódio(se existiu):"
          items={["Pão", "Comida de verdade","Doce","Fruta","Salgado"]}
          selectedItems={comeuAntes}
          onChange={(item) => handleCheckboxChange(comeuAntes, setComeuAntes, item)}
        />


        <CheckboxGroup
          legend="O que sentiu antes do episódio (se existiu):"
          items={listaSentimentos}
          selectedItems={sentiuAntes}
          onChange={(item) => handleCheckboxChange(sentiuAntes, setSentiuAntes, item)}
        />

        <CheckboxGroup
          legend="O que comeu no episódio(se existiu):"
          items={["Pão", "Comida de verdade","Doce","Fruta","Salgado"]}
          selectedItems={comeu}
          onChange={(item) => handleCheckboxChange(comeu, setComeu, item)}
        />


        <CheckboxGroup
          legend="Como se sentiu depois de comer:"
          items={listaSentimentos}
          selectedItems={sentiuDepois}
          onChange={(item) => handleCheckboxChange(sentiuDepois, setSentiuDepois, item)}
        />
        <label>Contexto ou gatilho do episódio:</label>
        <TextareaInput
        value={contexto}
        onChange={(e) => setContexto(e.target.value)}
        />

        <Button />
      </form>
      {mostrarDados && (
        <div className="preview">
          <h3>Dados enviados</h3>
          <p>Tipo de fome: {tipoFome}</p>
          <p>Intensidade: {intensidade}</p>
          <p>Comeu antes: {comeuAntes.join(", ")}</p>
          <p>Sentiu antes: {sentiuAntes.join(", ")}</p>
          <p>Comeu: {comeu.join(", ")}</p>
          <p>Sentiu depois: {sentiuDepois.join(", ")}</p>
          <p>Contexto: {contexto}</p>
        </div>
      )}
    </div>
  );
}

export default DiaryForm;

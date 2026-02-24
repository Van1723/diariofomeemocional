import { useState } from "react";
import  "../components/global.css"
import validationFormulario from "../../utils/validation";




export default function DiaryForm ({ onSubmit }) {
 
  // variaveis 
  const [tipoFome, setTipoFome] = useState("");
  const [intensidade, setIntensidade] = useState(null);
  const [sentiuAntes, setSentiuAntes] = useState("");
  const [sentiuDepois, setSentiuDepois] = useState("");
  const [comeuAntes, setComeuAntes] = useState("");
  const [comeu, setComeu] = useState("");
  const [contexto, setContexto] = useState("");
  const [mostrarDados, setMostrarDados] = useState(false);
  const [erros, setErros] = useState({});
 

  const listaSentimentos = [
    "Ansioso(a)",
    "Triste",
    "Feliz",
    "Entediado(a)",
    "Estressado(a)",
    "Calmo(a)",
    "Irritado(a)",
    "Culpado(a)"
  ];
  const listaAlimentosAntes = [
  "Nada",
  "Café",
  "Pão",
  "Bolacha",
  "Doce",
  "Fruta",
  "Refeição"
];

const listaAlimentos = [
  "Doce",
  "Salgado",
  "Refeição completa",
  "Lanche",
  "Fast food",
  "Fruta"
];

  
  
 // renderização
 const handleSubmit = (e) => {
  e.preventDefault();
  


  const novoRegistro = {
    dataHora: new Date().toISOString(),
    tipoFome,
    intensidade,
    sentiuAntes,
    comeuAntes,
    comeu,
    sentiuDepois,
    contexto
  };

  const erros = validationFormulario(novoRegistro);
  console.log("Novo registro:", novoRegistro);

 
 console.log("Erros encontrados:", erros);

  if (Object.keys(erros).length > 0) {
    setErros(erros);
    return; // PARA aqui se tiver erro
  }

  // Se passou na validação:
  onSubmit(novoRegistro);
  setMostrarDados(true);

  // Resetar campos
  setTipoFome("");
  setIntensidade("");
  setSentiuAntes("");
  setComeuAntes("");
  setComeu("");
  setSentiuDepois("");
  setContexto("");
};
 


    
  
  return (
    
     // css alinhado ao centro e em colunas assim como o form

    <div id="container" style={{ display:"flex",textAlign:"center",justifyContent:"center",flexDirection:"column", alignItems:"center"}}>
      <form onSubmit={handleSubmit}  style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center",border:"solid 2px black", borderRadius:"5%"}}>
          <select value={tipoFome} onChange={e => setTipoFome(e.target.value)}>
            <option required value="">Selecione o tipo de fome</option>
            <option value="Física">Física</option>
            <option value="Emocional">Emocional</option>
          </select>
          {erros.tipoFome && <span className="erro">{erros.tipoFome}</span>}

         <div className={`grupo ${erros.intensidade ? "input-erro" : ""}`}>
            <h4>🔥 Intensidade da fome: {intensidade}</h4>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={intensidade ?? 0}
              onChange={(e) => {
                setIntensidade(Number(e.target.value));
                setErros({ ...erros, intensidade: "" });
              }}
            />
         </div>
            {erros.intensidade && (
            <span className="erro">{erros.intensidade}</span>
            )}

          <h4>Sentiu antes</h4>
           <div className={`grupo ${erros.sentiuAntes ? "input-erro" : ""}`}>
            {listaSentimentos.map(sentimento => (
            <label key={sentimento}>
             <input
                type="radio"
                name="antes"
                value={sentimento}
                checked={sentiuAntes === sentimento}
                onChange={(e) => {setSentiuAntes(e.target.value); setErros({ ...erros, sentiuAntes: "" })}}
              />
             {sentimento}
            </label>
            
           
          ))}
          </div>
          {erros.sentiuAntes && <span className="erro">{erros.sentiuAntes}</span>}

          <h4>O que comeu antes ? </h4>
          <div className={`grupo ${erros.comeuAntes ? "input-erro" : ""}`}>
            {listaAlimentosAntes.map(item => (
              <label key={item}>
                <input 
                  type="radio"
                  name="comeuAntes"
                  value={item}
                 checked={comeuAntes === item}
                 onChange={(e) => {
                 setComeuAntes(e.target.value);
                 setErros({ ...erros, comeuAntes: "" });
                }}
                />
                {item}
              </label>
           ))}
          </div>  
          {erros.comeuAntes && <span className="erro">{erros.comeuAntes}</span>}

       
        <h4>O que comeu no episódio ?</h4>
        <div className={`grupo ${erros.comeu ? "input-erro" : ""}`}>
        {listaAlimentos.map(item => (
          <label key={item}>
        <input
          type="radio"
          name="comeu"
          value={item}
          checked={comeu === item}
          onChange={(e) => {
            setComeu(e.target.value);
            setErros({ ...erros, comeu: "" });
          }}
      />
      {item}
    </label>
  ))}
</div>

{erros.comeu && <span className="erro">{erros.comeu}</span>}

          <h4>Sentiu depois</h4>
        <div className={`grupo ${erros.sentiuDepois ? "input-erro" : ""}`}>
          {listaSentimentos.map(sentimento => (
             <label key={sentimento}>
                <input
                  type="radio"
                  name="depois"
                  value={sentimento}
                  checked={sentiuDepois === sentimento}
                  onChange={(e) => {setSentiuDepois(e.target.value); setErros({ ...erros, sentiuDepois: "" })}}
                />
                {sentimento}
          </label>
          ))}
        </div>
        {erros.sentiuDepois && <span className="erro">{erros.sentiuDepois}</span>}
          
         <h4>Contexto</h4>
          <textarea 
          
            value={contexto}
            onChange={(e) => {setContexto(e.target.value); setErros({ ...erros, contexto: "" })}}
            placeholder="O que estava acontecendo?"
          />
          {erros.contexto && <span className="erro">{erros.contexto}</span>}
        
           {/* setmostradados é pra mostrar os dados em baixo no registro com histórico */}
        <button type="submit">Registrar</button>
        {mostrarDados && <p>Registro salvo ✅</p>}
      
      
        



    </form>

     
  </div>
 );
}

 






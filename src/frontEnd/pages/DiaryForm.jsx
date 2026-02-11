import { useState } from "react";
import  "../components/global.css"




export default function DiaryForm ({ onSubmit }) {
 
  // variaveis 
  const [tipoFome, setTipoFome] = useState("");
  const [intensidade, setIntensidade] = useState(5);
  const [sentiuAntes, setSentiuAntes] = useState("");
  const [sentiuDepois, setSentiuDepois] = useState("");
  const [comeuAntes, setComeuAntes] = useState("");
  const [comeu, setComeu] = useState("");
  const [contexto, setContexto] = useState("");
  const [mostrarDados, setMostrarDados] = useState(false);


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
   // variavel do formulario e data local
  const novoRegistro = {
    dataHora: new Date().toLocaleString(),
    tipoFome,
    intensidade,
    sentiuAntes,
    comeuAntes,
    comeu,
    sentiuDepois,
    contexto
  };
  
  // novo resgistro adicionado
  onSubmit(novoRegistro);
  // form controlado
  setMostrarDados(true);

  setTipoFome("");
  setIntensidade(5
  );
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
            <option value="">Selecione o tipo de fome</option>
            <option value="Física">Física</option>
            <option value="Emocional">Emocional</option>
          </select>

          <h4>🔥 Intensidade da fome: {intensidade}</h4>
          <input
            style={{width:"100px"}}
            type="range"
            min="0"
            max="10"
            step="1"
            value={intensidade}
            onChange={e => setIntensidade(Number(e.target.value))}
          />


          <h4>Sentiu antes</h4>
          <div className="grupo">
          {listaSentimentos.map(sentimento => (
          <label key={sentimento}>
            <input
              type="radio"
              name="antes"
              value={sentimento}
              checked={sentiuAntes === sentimento}
              onChange={e => setSentiuAntes(e.target.value)}
            />
            {sentimento}
          </label>
          ))}
          </div>

          <h4>O que comeu antes ? </h4>
          <div className="grupo">
            {listaAlimentosAntes.map(item => (
              <label key={item}>
                <input
                  type="radio"
                  name="comeuAntes"
                  value={item}
                  checked={comeuAntes === item}
                  onChange={e => setComeuAntes(e.target.value)}
                />
                {item}
              </label>
           ))}
          </div>  
       
        <h4>O que comeu no episódio ?</h4>
        <div className="grupo">
          {listaAlimentos.map(item => (
          <label key={item}>
              < input
              type="radio"
              name="comeu"
              value={item}
              checked={comeu === item}
              onChange={e => setComeu(e.target.value)}
              />
              {item}
          </label>
         ))}
        </div>

          <h4>Sentiu depois</h4>
        <div className="grupo">
          {listaSentimentos.map(sentimento => (
             <label key={sentimento}>
                <input
                  type="radio"
                  name="depois"
                  value={sentimento}
                  checked={sentiuDepois === sentimento}
                  onChange={e => setSentiuDepois(e.target.value)}
                />
                {sentimento}
          </label>
          ))}
        </div>
          
         <h4>Contexto</h4>
          <textarea 
          
            value={contexto}
            onChange={e => setContexto(e.target.value)}
            placeholder="O que estava acontecendo?"
          />
        
           {/* setmostradados é pra mostrar os dados em baixo no registro com histórico */}
        <button type="submit">Registrar</button>
        {mostrarDados && <p>Registro salvo ✅</p>}
      
        



    </form>

     
  </div>
 );
}

 






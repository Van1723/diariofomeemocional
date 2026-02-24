import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


export default function SentimentosGrafico({ registros }) {
  // Agrupa os sentimentos e conta frequência
  const sentimentosFrequentes = registros.reduce((acc, registro) => {
    if (!registro.sentiuAntes) return acc;
    const sentimentos = registro.sentiuAntes.split(","); // caso venha como string separada por vírgula
    sentimentos.forEach(s => {
      const chave = s.trim();
      if (chave) acc[chave] = (acc[chave] || 0) + 1;
    });
    return acc;
  }, {});

  // Converte para array para o Recharts
  const dadosGrafico = Object.keys(sentimentosFrequentes)
    .filter(key => key) // remove keys vazias
    .map(key => ({
      nome: key,
      quantidade: sentimentosFrequentes[key],
    }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={dadosGrafico} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <XAxis 
          dataKey="nome" 
          angle={-20} 
          textAnchor="end" 
          interval={0} 
          padding={{ left: 10, right: 10 }} 
        />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quantidade" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default function RegistroItem({ registro }) {
  return (
    <div className="preview">

      <p><strong>Data:</strong> {registro.dataHora}</p>
      <p><strong>Tipo:</strong> {registro.tipoFome}</p>
      <p><strong>Intensidade:</strong> {registro.intensidade}</p>

      <p><strong>Sentiu antes:</strong> {registro.sentiuAntes}</p>
      <p><strong>Comeu antes:</strong> {registro.comeuAntes}</p>
      <p><strong>Comeu:</strong> {registro.comeu}</p>
      <p><strong>Sentiu depois:</strong> {registro.sentiuDepois}</p>

      <p><strong>Contexto:</strong> {registro.contexto}</p>

      <hr />

    </div>
  );
}

import { useMemo } from "react";
import calcularIntensidadeMedia from "../../../utils/intensidadeMedia";


function CardIntensidade({ registros }) {

  const intensidadeMedia = useMemo(() => {
    return calcularIntensidadeMedia(registros);
  }, [registros]);
  console.log(registros);

  return (
    <div className="card">
      <h3>🔥 Intensidade Média</h3>
      <p>{intensidadeMedia}</p>
    </div>
  );
}

export default CardIntensidade;
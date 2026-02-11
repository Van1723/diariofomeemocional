import { Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function ChartFome({ registros = [] }) {
  console.log("DADOS RECEBIDOS:", registros)

  const emocional = registros.filter(
    r => r.tipoFome === "emocional"
  ).length

  const fisica = registros.filter(
    r => r.tipoFome === "física"
  ).length

  const data = {
    labels: ["Emocional", "Física"],
    datasets: [
      {
        data: [emocional, fisica],
        backgroundColor: ["#f87171", "#60a5fa"]
      }
    ]
  }

  return <Pie data={data} />
}

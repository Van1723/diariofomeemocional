import { Link } from "react-router-dom";

  export default function Navbar() {
  return (
  <nav style={{height:"40px" ,display:"flex",flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  boxSizing: "border-box" }}>
    <div className="Navbar" style={{}}>
      <Link to="/home">Home</Link> |{" "}
      <Link to="/diary">Diário|</Link>{" "}
      <Link to="/lista">Lista|</Link>{" "}
      <Link to="/registro/0">Registro|</Link>{" "}
      <Link to="/formRegistro">Registro com histórico</Link>
    </div>

  </nav>
);
}



import { Link } from "react-router-dom";

  export default function Navbar() {
  return (
  <nav>
    <Link to="/home">Home</Link> |{" "}
    <Link to="/diary">Diário|</Link>{" "}
    <Link to="/lista">Lista|</Link>{" "}
     <Link to="/registro/0">Registro|</Link>{" "}
     <Link to="/registro">Selecione Um registro</Link>{" "}

  </nav>
);
}



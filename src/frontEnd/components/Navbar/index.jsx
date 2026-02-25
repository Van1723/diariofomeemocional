import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";


  export default function Navbar() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
  logout();
  navigate("/login");
};
  return (
  <nav style={{height:"40px" ,display:"flex",flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  boxSizing: "border-box",
  maxWidth: "1200px",
  margin: "0 auto",
   }}>
    <div className="Navbar" style={{}}>
      <Link to="/diary">Home</Link> |{" "}
      <Link to="/dash">Dashboard|</Link>{" "}
      <Link to="/lista">Lista|</Link>{" "}
      <Link to="/registro/0">Registro|</Link>{" "}
      <Link to="/formRegistro">Registro com histórico</Link>{" "}
    
      <button  className="sair" style={{backgroundColor:"red"}}onClick={handleLogout}>Sair</button>

    </div>

  </nav>
);
}



import { Link } from "react-router-dom";

const Home = () => (
  <nav>
    <Link to="/home">Home</Link> |{" "}
    <Link to="/diary">Diário|</Link>{" "}
    <Link to="/lista">Lista|</Link>{" "}
  </nav>
);

export default Home;

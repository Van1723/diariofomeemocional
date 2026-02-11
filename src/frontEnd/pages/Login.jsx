import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login} = useAuth();
  const navigate = useNavigate();

   






 

  const handleSubmit = (e) => {
  e.preventDefault();

  const success = login(email, password);

  if (!success) {
    setError('E-mail ou senha incorretos.');
  } else {
    navigate("/diary");
  }
  };
  return (

    <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh"
  }}>
    <form style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "400px", height:"300px", border:"solid 2px black", borderRadius:"5%", padding:"60px"}} onSubmit={handleSubmit}>
        <h2 style={{ display:"flex",justifyContent:"center", }}>Login</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <input className='entrar'  value={email}
      type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input  value={password} className='entrar'type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
      <button  className='logar' type="submit">Entrar</button>
    </form>
   </div> 
  );
};
export default Login;


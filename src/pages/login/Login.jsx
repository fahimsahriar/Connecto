import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./login.scss";
import { Link } from "react-router-dom"

function Login() {
  const {login} = useContext(AuthContext);

  const handleLogin = ()=>{
    login();
  }

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello World</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          <span>Don't have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <Link to={"/home"}>
              <button onClick={handleLogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

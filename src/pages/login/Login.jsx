import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  //taking input to a useState
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  //taking input using onClick function
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //fetching data
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };
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
            <input
              type='text'
              placeholder='username'
              name='username'
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='password'
              name='password'
              onChange={handleChange}
            />
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

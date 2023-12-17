import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };
  console.log(err);

  return (
    <div className='register'>
      <div className='card'>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <input
              type='text'
              placeholder='Username'
              name='username'
              onChange={handleChange}
            />
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='Full Name'
              name='name'
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
            {/* <Link to={"/login"}>
            </Link> */}
          </form>
        </div>
        <div className='left'>
          <h1>Hello World</h1>
          <p>Thank you for having a social life</p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;

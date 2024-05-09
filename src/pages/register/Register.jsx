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
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // Check if username, email, name, or password is empty
    if (!inputs.username || !inputs.password || !inputs.email || !inputs.name) {
      setErr("Fill the empty fields.");
      setSuccessMessage(""); // Clear success message if there's an error
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/auth/register`, inputs);
      setSuccessMessage("User registered successfully!");
      // Clear input fields after successful registration
      setInputs({
        username: "",
        email: "",
        password: "",
        name: "",
      });
      setErr(""); // Clear error message if registration is successful
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setErr("Internal Server Error. User not created.");
        setSuccessMessage(""); // Clear success message if there's an error
      } else {
        setErr(err.response.data);
        setSuccessMessage(""); // Clear success message if there's an error
      }
    }
  };

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
              value={inputs.username}
              onChange={handleChange}
            />
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={inputs.email}
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='Full Name'
              name='name'
              value={inputs.name}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={inputs.password}
              onChange={handleChange}
            />
            {err && <p className="error">{err}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <button onClick={handleClick}>Register</button>
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

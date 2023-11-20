import "./register.scss"
import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Full Name" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          <span>Do you have an account?</span>
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
import "./login.scss"

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          <span>Don't have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
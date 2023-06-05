import './login.css'


const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">eWaves</h3>
              <span className="loginDesc">Connect with EUSL friends</span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginButton">Login</button>
                <span className="loginFogot">Fogot Password?</span>
                <button className="loginRegisterButton">Create a New Account</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login
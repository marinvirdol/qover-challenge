import React from 'react'
import {useAuth} from '../context/auth-context'
import LoginForm from '../components/login-form'
import Logo from '../components/logo'
import './Login.css'

function Login() {
  const {login} = useAuth()

  return (
    <div className="login-container">
      <div className="login-container__body">
        <div className="login-container__form-container">
          <Logo />
          <div className="login-container__form">
            <h3 className="login-container__form-title">Welcome at Qover</h3>
            <LoginForm onSubmit={login} />
          </div>
          <div className="login-container__signup">
            Don't have an account? <button className="btn btn-link" style={{fontSize: '14px'}} type="button">Ask Access</button>
          </div>
        </div>
      </div>
      <div className="login-container__footer">&#169; Qover 2017</div>
    </div>
  )
}

export default Login;
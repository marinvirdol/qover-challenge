import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useUser} from './context/user-context'
import Login from './containers/Login'
import Quote from './containers/Quote'
import { useAuth } from './context/auth-context'
import './App.css'

function App() {
  const {user} = useUser()
  const {logout} = useAuth()

  return (
    <div className="container-fluid" style={{paddingRight: 0, paddingLeft: 0}}>
      <nav className="app__navbar navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse container" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" style={{color: '#fff'}}>
              &#60; QOVER.ME
            </li>
          </ul>
          {
            user ?
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a style={{color: '#fff', cursor: 'pointer' }} className="my-2 my-sm-0" onClick={logout}>Log Out</a>
              :
              ''
          }
        </div>
      </nav>
      {user ? <Quote /> : <Login />}
    </div>
  )
}
export default App;

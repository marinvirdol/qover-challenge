import React from 'react'
import {useAuth} from '../../context/auth-context'

function AuthenticatedApp() {
  const {user, logout} = useAuth()
  return (
    <div>
      {user.username} is logged in!{' '}
      <button type="button" onClick={logout}>
        logout
      </button>
    </div>
  )
}

export default AuthenticatedApp

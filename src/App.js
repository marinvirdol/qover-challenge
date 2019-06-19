import React from 'react';
import './App.css';
import Login from './containers/Login/Login';
import {useUser} from './context/user-context'
import AuthenticatedApp from './containers/AuthenticatedApp/AuthenticatedApp';

function App() {
  const {user} = useUser();
  return user ? <AuthenticatedApp /> : <Login />
}

export default App;

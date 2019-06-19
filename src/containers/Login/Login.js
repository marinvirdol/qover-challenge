import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import {useAuth} from '../../context/auth-context'

function Login() {
  const {login} = useAuth()

  return (
    <div className="login">
      <h3>Welcome at Qover</h3>
      <LoginForm onSubmit={login} />
      <div style={{border: '1px solid white'}}>
        Don't have an account? <Link component="button" variant="body2">Ask Access</Link>
      </div>
    </div>
  )
}

function LoginForm({onSubmit}) {
  const [state, setState] = React.useState({
    email: '', password: ''
  });

  const [error, setError] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({
      email: state.email,
      password: state.password,
    }).then(
      data => console.log('Data: ', data),
      err => setError(err)
    )
  }

  const handleChange = name => event => {
    setError('');
    setState({...state, [name]: event.target.value});
  }

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'column'}}>
      <TextField
        label="Email"
        margin="normal"
        value={state.email}
        onChange={handleChange('email')}
      />
      <TextField
        label="Password"
        margin="normal"
        type="password"
        value={state.password}
        onChange={handleChange('password')}
      />
      {error.length > 0 && <span style={{color: 'red', float: 'left'}}>{error}</span>}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox value="gilad" />}
            label="Remember me"
          />
        </FormGroup>

        <Link component="button" variant="body2">Forgot your password?</Link>
      </div>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Sign in into your account
      </Button>
    </form>
  )
}

export default Login;
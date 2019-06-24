import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from '../hooks/form';
import './login-form.css'

function LoginForm({onSubmit}) {
  const initialValues = {
    email: {value: '', dirty: false, touched: false},
    password: {value: '', dirty: false, touched: false},
    rememberMe: {value: false, dirty: false, touched: false}
  }

  const [error, setError] = React.useState('');

  const {values, handleChange, handleClick, handleSubmit, errors} = useForm(initialValues, login, validate)

  function login() {
    onSubmit({
      email: values.email.value,
      password: values.password.value,
      rememberMe: values.rememberMe.value
    }).then(() => {}, err => setError(err))
  }

  function validate(formValues) {
    let errors = {};
    if (!formValues.email.value) {
      errors.email = 'This field is required';
    }
    if (!formValues.password.value) {
      errors.password = 'This field is required';
    }
    return errors;
  }

  return (
    <Form onSubmit={handleSubmit} noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'column', fontSize: '12px'}}>
      <Form.Group>
        <Form.Label htmlFor="email-input">Email</Form.Label>
        <Form.Control
          id="email-input"
          name="email"
          value={values.email.value}
          onChange={handleChange}
          onClick={handleClick}
          isInvalid={Boolean(errors.email && values.email.touched && values.email.dirty)}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password-input" >Password</Form.Label>
        <Form.Control
          id="password-input"
          name="password"
          type="password"
          value={values.password.value}
          onChange={handleChange}
          onClick={handleClick}
          isInvalid={Boolean(errors.password && values.password.touched && values.password.dirty)}
        />
        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
      </Form.Group>

      {error.length > 0 && <span style={{color: 'red', float: 'left'}}>{error}</span>}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Form.Check
            type="checkbox"
            label="Remember me"
            name="rememberMe"
            value={values.rememberMe.value}
            onChange={handleChange}
          />

        <Button style={{fontSize: '12px'}} variant="link">Forgot your password?</Button>
      </div>
      <Button onClick={handleSubmit} type="submit" variant="primary" color="primary">
        Sign in into your account
      </Button>
    </Form>
  )
}

export default LoginForm

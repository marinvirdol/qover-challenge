import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from '../hooks/form'
import Col from 'react-bootstrap/Col';

function QuoteForm({onSubmit}) {
  const initialValues = {
    age: {value: '', dirty: false, touched: false},
    make: {value: '', dirty: false, touched: false},
    price: {value: '', dirty: false, touched: false}
  }

  const {values, handleChange, handleClick, handleSubmit, errors} = useForm(initialValues, getQuote, validate)

  const [error, setError] = React.useState({
    age: '',
    make: '',
    price: ''
  })

  function getQuote() {
    onSubmit({
      age: values.age.value,
      make: values.make.value,
      price: values.price.value
    }).then(
      data => data,
      err => setError(err)
    )
  }

  function validate(formValues) {
    let errors = {};

    if (!formValues.price.value) {
      errors.price = 'This field is required'
    }

    if (!formValues.age.value) {
      errors.age = 'This field is required'
    }

    if (!formValues.make.value) {
      errors.make = 'This field is required'
    }

    return errors;
  }

  function showError(field) {
    return Boolean((errors[field] || error[field]) && values[field].touched && values[field].dirty)
  }

  return (
    <Form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Form.Group as={Form.Row}>
        <Form.Label column sm={2} htmlFor="age-input">Age of the driver</Form.Label>
        <Col sm={2}>
          <Form.Control
            id="age-input"
            name="age"
            type="number"
            value={values.age.value}
            onChange={handleChange}
            onClick={handleClick}
            isInvalid={showError('age')}
          />
          <Form.Control.Feedback type="invalid">{error.age || errors.age}</Form.Control.Feedback>
        </Col>
      </Form.Group>
      {<Form.Group as={Form.Row}>
        <Form.Label column sm={2} htmlFor="make-input">Car</Form.Label>
        <Col sm={4}>
          <Form.Control id="make-input" as="select"
            name="make"
            type="select"
            onClick={handleClick}
            onChange={handleChange}
            value={values.make.value}
            isInvalid={showError('make')}
          >
            <option disabled></option>
            <option value={'audi'}>AUDI</option>
            <option value={'bmw'}>BMW</option>
            <option value={'porsche'}>PORSCHE</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">{error.make || errors.make}</Form.Control.Feedback>
        </Col>
      </Form.Group>}
      <Form.Group as={Form.Row}>
        <Form.Label column sm={2} htmlFor="price-input">Purchase Price</Form.Label>
        <Col sm={2}>
          <Form.Control
            id="price-input"
            name="price"
            type="number"
            value={values.price.value}
            onChange={handleChange}
            onClick={handleClick}
            isInvalid={showError('price')}
          />
          <Form.Control.Feedback type="invalid">{error.price || errors.price}</Form.Control.Feedback>
        </Col>
        <Form.Label column sm={2}>&euro;</Form.Label>
      </Form.Group>
      <Form.Group as={Form.Row}>
        <Col sm={{span: 10, offset: 2}}>
        <Button onClick={handleSubmit} variant="primary" color="primary">
          Get a price
        </Button>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default QuoteForm
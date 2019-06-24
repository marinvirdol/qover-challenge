import React from 'react'

function useForm(initialValues, callback, validate) {
  const [values, setValues] = React.useState(initialValues)
  const [errors, setErrors] = React.useState(validate(initialValues))


  const handleSubmit = event => {
    if (event) event.preventDefault()
    let newValues = {};
    Object.keys(values).forEach(inputName => {
      newValues = {...newValues, ...{
        [inputName]: {...values[inputName], ...{touched: true, dirty: true}}
      }}
    })
    setValues(newValues)
    if (Object.keys(errors).length === 0) {
      callback()
    }
  }

  const handleChange = event => {
    event.persist();
    const newValues = {...values, ...{
      [event.target.name]: {...values[event.target.name], ...{
        value: event.target.value,
        dirty: true
      }}
    }}
    if (validate) setErrors(validate(newValues))
    setValues(newValues)
  }

  const handleClick = event => {
    const newValues = {...values, ...{
      [event.target.name]: {...values[event.target.name], ...{touched: true }}
    }}
    if (validate) setErrors(validate(newValues))
    setValues(newValues)
  }

  return {
    handleChange,
    handleClick,
    handleSubmit,
    values,
    errors
  }
}

export {useForm}
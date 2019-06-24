function computeQuote({age, make, price}) {
  const errors = validate({age, make, price})
  return Object.keys(errors).length > 0 ?
    Promise.reject(errors) : Promise.resolve(compute(make, price))
}

function compute(make, price) {
  return {
    global: computeGlobal(make),
    universal: computeUniversal(make, price)
  }
}

function computeGlobal(make) {
  const globalOffers = {
    audi: 250,
    bmw: 150,
    porsche: 500
  }
  return globalOffers[make]
}

function computeUniversal(make, price) {
  const percentage = {
    audi: (price * 0.003).toFixed(2),
    bmw: (price * 0.004).toFixed(2),
    porsche: (price * 0.007).toFixed(2)
  }
  return computeGlobal(make) + percentage[make]
}

function validate({age, make, price}) {
  let errors = {};
  if (price < 5000) {
    errors.price = 'Sorry! The price of the car is too low'
  }
  if (age < 18) {
    errors.age = 'Sorry! The driver is too young'
  }
  if (age < 25 && make === 'PORSCHE') {
    errors.form = 'Sorry! We cannot accept this particular risk'
  }
  return errors;
}

export {computeQuote}
function login({email, password}) {
  const handleUserResponse = (email) => {
    return email;
  }

  return email === 'Qover' && password === 'Ninja' ?
    Promise.resolve(handleUserResponse(email)) : Promise.reject('Incorrect email or password')
}

function logout() {
  return Promise.resolve();
}

export {login, logout}
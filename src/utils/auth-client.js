const localStorageKey = '__user__'

function login({email, password, rememberMe}) {
  const handleUserResponse = (email) => {
    if (rememberMe) window.localStorage.setItem(localStorageKey, email)
    return email;
  }

  return email === 'Qover' && password === 'Ninja' ?
    Promise.resolve(handleUserResponse(email)) : Promise.reject('Incorrect email or password')
}

function logout() {
  window.localStorage.removeItem(localStorageKey)
  return Promise.resolve();
}

function getUser() {
  return window.localStorage.getItem(localStorageKey)
}

export {login, logout, getUser}
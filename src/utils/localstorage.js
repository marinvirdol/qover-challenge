import React from 'react'

function useLocalStorageState({key, serialize = v => v, deserialize = v => v}) {
  const [state, setState] = React.useState(() => deserialize(window.localStorage.getItem(key)))

  const serializedState = serialize(state)

  React.useEffect(() => {
    window.localStorage.setItem(key, serializedState)
  }, [key, serializedState])

  return [state, setState];
}

export default useLocalStorageState
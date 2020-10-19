import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './Reducers'

let store

const initStore = (preloadedState) => createStore(
  reducer,
  preloadedState,
  composeWithDevTools(applyMiddleware())
)

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  
  if (!store) store = _store

  return _store
}

export const useStore = (initialState) => useMemo(() => initializeStore(initialState), [initialState])

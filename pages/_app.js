import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useStore } from '../src/Store'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  
  return (
    <Provider store={store}>
      <Component {...pageProps}/>
      <ToastContainer newestOnTop hideProgressBar autoClose={2500} transition={Flip}/>
    </Provider>
  )
}

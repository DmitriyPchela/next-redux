import React from 'react'
import { HomePage } from '../src/Components/Pages/HomePage'

export default function SSG() {
  return <HomePage />
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getStaticProps() {
  // Note that in this case we're returning the state directly, without creating
  // the store first (like in /pages/ssr.js), this approach can be better and easier
  return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        light: false,
      },
    },
  }
}

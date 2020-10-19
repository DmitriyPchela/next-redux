import React from 'react'
import { Header, MetaHead } from '../Header'

export const MainLayout = ({ children }) => {
  return (
    <>
      <MetaHead/>
      <Header/>
      <main className="page-wrapper">
        {children}
      </main>
    </>
  )
}


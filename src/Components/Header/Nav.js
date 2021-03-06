import React from 'react'
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx>
        {`
          a {
            margin-right: 25px;
          }
        `}
      </style>
    </nav>
  )
}

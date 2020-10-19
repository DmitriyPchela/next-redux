import React from 'react'
import Head from 'next/head'

export const MetaHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    
      <meta name="description" content="Site description"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Website title"/>
      <meta property="og:description" content="Website description"/>
      <meta property="og:image" content=""/>
      <meta property="og:url" content="Site link"/>
      <meta property="og:site_name" content="Site name"/>
      <link rel="canonical" href=""/>
      
      <title>React+Next+Redux</title>
    </Head>
  )
}

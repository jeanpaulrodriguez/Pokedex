import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { Navbar } from '../ui'

interface Props {
  title?: string
  children?: ReactNode
}

export const Layout: FC<Props>= ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp'}</title>
            <meta name='autor' content='Janpi'></meta>
            <meta name='description' content={`Informacion sobre el pokemon XXXXX ${ title }`}></meta>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}></meta>
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}

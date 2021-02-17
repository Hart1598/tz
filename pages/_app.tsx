import '../styles/globals.css'
import React from 'react'

import { Provider } from 'react-redux'

import { store } from '../store'
import styled from 'styled-components'




interface Props {
  Component: any
  pageProps: React.ReactChild
}


function MyApp({ Component, pageProps }: Props) {
  return(
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  )
}

export default MyApp

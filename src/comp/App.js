import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Nav from './nav'
import Rout from './rout'
import Footer from './footer'
import Homeproduct from './home_product'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Homeproduct/>
    <Rout />
    <Footer />

    </BrowserRouter>
    </>
  )
}

export default App
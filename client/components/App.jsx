import React from 'react'

import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

const App = () => (
  <div className='container'>
    <Header head = {Header} />
    <Nav nav= {Nav} />
    <Footer footer = {Footer} />
  </div>
)

export default App

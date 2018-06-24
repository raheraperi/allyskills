import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Assess from './Assess'
import Share from './Share'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <div className='frame'>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route exact path='/' component={About} />
            <Route path='/' component={Assess} />
            <Route path='/' component={Share} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

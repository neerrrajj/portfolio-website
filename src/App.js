import { Fragment } from 'react'

import { Navbar, Header, About, Projects, Contact } from './container'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  )
}

export default App

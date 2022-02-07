import { Fragment } from 'react'

import { Navbar, Header, About, Projects, Contact, Footer } from './container'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App

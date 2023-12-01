import { BrowserRouter } from "react-router-dom";

import { NavBar, Hero, Clients, Benefits, Pricing, How, About, Footer } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <Clients />
      <Benefits />
      <Pricing />
      <How />
      <About />
      <Footer />
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter } from "react-router-dom";

import { NavBar, Hero, Clients, Benefits, Pricing, How, About, Footer } from './components'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Hero />
    </div>
    <div>
    <Clients />
      <Benefits />
      <Pricing />
      <How />
      <About />
    </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
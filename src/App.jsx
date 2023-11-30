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
    </div>
    <div>
      <Benefits />
      <Pricing />
      <How />
      <About />
    </div>
    <div>
      <Footer />
    </div>

    </BrowserRouter>
  )
}

export default App
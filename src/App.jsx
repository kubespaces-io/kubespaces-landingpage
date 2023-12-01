import { BrowserRouter } from "react-router-dom";

import { NavBar, Hero, Clients, Benefits, Pricing, How, About, Footer } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <div className="bg-primary w-full">
        <Clients />
      </div>
      <Benefits />
      <Pricing />
      <div className="bg-primary w-full">
        <How />
      </div>
      <About />
      <Footer />
    </BrowserRouter>
  )
}

export default App
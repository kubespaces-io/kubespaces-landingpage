import { BrowserRouter } from "react-router-dom";

import { NavBar, Hero, Clients, Benefits, Pricing, How, About } from './components'

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
    </BrowserRouter>
  )
}

export default App
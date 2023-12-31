import { BrowserRouter } from "react-router-dom";

import { NavBar, Hero, Clients, Benefits, Pricing, How, About, Contact, WaitingList, Footer } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <div className="bg-primary w-full">
        {/* <Clients /> */}
        <WaitingList />
      </div>
      <Benefits />
      <div className="bg-primary w-full">
        <How />
      </div>
      <Pricing />
      <About />
      <div className="bg-primary w-full h-[500px] mb-[-500px]"></div>
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
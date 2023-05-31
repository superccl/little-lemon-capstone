import React from "react"
import Header from "./components/Header.js"
import Reservation from "./pages/Reservation.js"
import Home from "./pages/Home.js"
import { Route, Routes } from "react-router-dom"
import Confirmation from "./pages/Confirmation.js"
import { SubmitProvider } from "./context/SubmitContext.js"
const App = () => {
  return (
    <SubmitProvider>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve-table" element={<Reservation />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
    </SubmitProvider>
  )
}

export default App

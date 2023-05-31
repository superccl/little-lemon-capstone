import React from "react"
import Header from "./components/Header.js"
import Reservation from "./pages/Reservation.js"
import Home from "./pages/Home.js"
import { Route, Router, Routes } from "react-router-dom"
import Confirmation from "./pages/Confirmation.js"
const App = () => {
  return (
    <main>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve-table" element={<Reservation />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header shadow section-padding">
      <Link to="/">
        <img className="logo" src={"/assets/Logo.png"} alt="Logo" />
      </Link>
      <Link className="btn btn-primary" to="/reserve-table">
        Reserve
      </Link>
    </header>
  )
}

export default Header

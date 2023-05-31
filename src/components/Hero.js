import React from "react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero section-padding" id="hero">
      <div>
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </article>
        <Link
          to="/reserve-table"
          className="btn btn-primary"
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            display: "inline-block",
          }}
        >
          Reserve a table
        </Link>
      </div>
      <img
        className="hero-image"
        src="/assets/salad.jpg"
        alt="A delicous salad"
      />
    </section>
  )
}

export default Hero

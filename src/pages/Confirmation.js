import moment from "moment"
import React from "react"
import { Link, useLocation } from "react-router-dom"

const Confirmation = () => {
  const { state } = useLocation()
  const { email, firstName, lastName, numberOfGuests, date, time } =
    state.values
  return (
    <section className="confirmation-container">
      <h1>Confirmation</h1>
      <p>Thank you for your reservation.</p>
      <p>A confirmation email has been sent to {email}</p>

      <h2>Reservation Details</h2>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Number of guests: {numberOfGuests}</p>
      <p>
        Date & time: {moment(date).format("YYYY-MM-DD")} {time}
      </p>
      <Link to="../" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  )
}

export default Confirmation

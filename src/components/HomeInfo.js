import React from "react"
import { Link } from "react-router-dom"

const HomeInfo = () => {
  return (
    <section className="grid-container">
      <div className="grid-item">
        <h2>Our New Menu</h2>
        <img src="/assets/dish.webp" alt="A delicous dish" />
        <p>
          Welcome to our new menu at our restaurant! We are excited to
          introduce you to our latest and greatest menu items. From
          our signature dishes to our innovative toppings, we have
          something for everyone.
        </p>
        <Link to="/menu" className="btn btn-primary">
          Our Menu
        </Link>
      </div>
      <div className="grid-item">
        <h2>Book a table</h2>
        <img src="/assets/book-a-table.jpg" alt="Book a table" />
        <p>
          Once your reservation is confirmed, you will receive a
          confirmation email with your reservation details and a link
          to check-in. You will also receive an email with the exact
          time and date for your table. Please note that reservations
          must be made at least 24 hours in advance. If you have any
          questions or concerns, please do not hesitate to contact us.
          We are here to help!
        </p>
        <Link to="/reserve-table" className="btn btn-primary">
          Reserve Table
        </Link>
      </div>
      <div className="grid-item">
        <h2>Opening Hours</h2>
        <img src="/assets/open-hour.jpg" alt="Open hour" />
        <div className="open-hour-container">
          <div>
            <p className="day-of-week">Monday - Friday:</p>
            <p className="opening-hour">11:00 - 23:00</p>
          </div>
          <div>
            <p className="day-of-week">Saturday & Sunday:</p>
            <p className="opening-hour">12:00 - 04:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInfo

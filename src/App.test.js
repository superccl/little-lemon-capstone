import React from "react"
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react"
import Reservation from "./pages/Reservation"
import Confirmation from "./pages/Confirmation"

describe("Reservation", () => {
  test("renders without crashing", () => {
    render(<Reservation />)
  })

  test("renders the form fields correctly", () => {
    render(<Reservation />)
    expect(screen.getByLabelText("email")).toBeInTheDocument()
    expect(screen.getByLabelText("First name")).toBeInTheDocument()
    expect(screen.getByLabelText("Last name")).toBeInTheDocument()
    expect(
      screen.getByLabelText("Number of guests")
    ).toBeInTheDocument()
    expect(screen.getByLabelText("date")).toBeInTheDocument()
    expect(screen.getByLabelText("Time")).toBeInTheDocument()
  })

  test("requires all form fields", () => {
    render(<Reservation />)
    fireEvent.submit(screen.getByText("Submit"))
    expect(screen.getByLabelText("email")).toHaveClass("Mui-error")
    expect(screen.getByLabelText("First name")).toHaveClass(
      "Mui-error"
    )
    expect(screen.getByLabelText("Last name")).toHaveClass(
      "Mui-error"
    )
    expect(screen.getByLabelText("Number of guests")).toHaveClass(
      "Mui-error"
    )
    expect(screen.getByLabelText("date")).toHaveClass("Mui-error")
    expect(screen.getByLabelText("Time")).toHaveClass("Mui-error")
    expect(screen.getByText("Required")).toBeInTheDocument()
  })

  test("validates the form fields correctly", () => {
    render(<Reservation />)
    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "invalidemail" },
    })
    fireEvent.change(screen.getByLabelText("First name"), {
      target: { value: "A" },
    })
    fireEvent.change(screen.getByLabelText("Last name"), {
      target: { value: "B" },
    })
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "0" },
    })
    fireEvent.change(screen.getByLabelText("date"), {
      target: { value: "2022-01-01" },
    })
    fireEvent.change(screen.getByLabelText("Time"), {
      target: { value: "" },
    })
    fireEvent.submit(screen.getByText("Submit"))
    expect(screen.getByLabelText("email")).toHaveClass("Mui-error")
    expect(screen.getByLabelText("First name")).toHaveClass(
      "Mui-error"
    )
    expect(screen.getByLabelText("Last name")).toHaveClass(
      "Mui-error"
    )
    expect(screen.getByLabelText("Number of guests")).toHaveClass(
      "Mui-error"
    )
    expect(screen.getByLabelText("date")).toHaveClass("Mui-error")
    expect(screen.getByLabelText("Time")).toHaveClass("Mui-error")
    expect(
      screen.getByText("Invalid email address")
    ).toBeInTheDocument()
    expect(screen.getByText("Required")).toBeInTheDocument()
  })
})

describe("Confirmation", () => {
  test("renders without crashing", () => {
    render(<Confirmation />)
  })

  test("displays the confirmation message correctly", () => {
    render(<Confirmation />)
    expect(
      screen.getByText("Thank you for your reservation.")
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        "A confirmation email has been sent to test@example.com"
      )
    ).toBeInTheDocument()
  })

  test("redirects to the home page when the back to home button is clicked", async () => {
    render(<Confirmation />)
    const backToHomeButton = screen.getByRole("a.btn-primary")
    expect(backToHomeButton).toBeInTheDocument()
    fireEvent.click(backToHomeButton)
    await waitFor(() => {
      expect(window.location.pathname).toBe("/")
    })
  })
})

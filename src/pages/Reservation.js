import { useState } from "react"
import { useFormik } from "formik"
import {
  Box,
  TextField,
  Stack,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material"
import * as Yup from "yup"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment/moment"
import { fetchAPI, submitAPI } from "../utils/utils"
import { useNavigate } from "react-router-dom"

const Reservation = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      date: moment().format("YYYY-MM-DD"),
      time: "",
      numberOfGuests: 0,
    },
    onSubmit: async (values) => {
      setIsLoading(true)
      const res = await submitAPI(values)
      if (res) {
        navigate("/confirmation", { state: { values } })
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      firstName: Yup.string().required("Required").min(2),
      lastName: Yup.string().required("Required").min(2),
      date: Yup.date().required("Required"),
      time: Yup.string().required("Required"),
      numberOfGuests: Yup.number().required("Required").min(1),
    }),
  })

  return (
    <section className="reserve-table-container">
      <Stack
        direction="column"
        style={{
          marginTop: "50px",
          alignItems: "center",
        }}
      >
        <h1>Reservation</h1>
        <Box p={6} style={{ width: "500px" }}>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" spacing={4}>
              <TextField
                id="email"
                label="email"
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={
                  !!formik.errors.email && !!formik.touched.email
                }
                helperText={
                  !!formik.touched.email && formik.errors.email
                }
                required
              />
              <TextField
                id="firstName"
                label="First name"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={
                  !!formik.errors.firstName &&
                  !!formik.touched.firstName
                }
                helperText={
                  !!formik.touched.firstName &&
                  formik.errors.firstName
                }
                required
              />
              <TextField
                id="lastName"
                label="Last name"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                error={
                  !!formik.errors.lastName &&
                  !!formik.touched.lastName
                }
                helperText={
                  !!formik.touched.lastName && formik.errors.lastName
                }
                required
              />
              <TextField
                id="numberOfGuests"
                label="Number of guests"
                name="numberOfGuests"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numberOfGuests}
                error={
                  !!formik.errors.numberOfGuests &&
                  !!formik.touched.numberOfGuests
                }
                helperText={
                  !!formik.touched.numberOfGuests &&
                  formik.errors.numberOfGuests
                }
                required
              />
              <TextField
                type="date"
                id="date"
                name="date"
                label="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
                error={!!formik.errors.date && !!formik.touched.date}
                helperText={
                  !!formik.touched.date && formik.errors.date
                }
                required
              />
              <FormControl fullWidth>
                <InputLabel id="time-select-label" required>
                  Time
                </InputLabel>
                <Select
                  labelId="time-select-label"
                  id="time-select"
                  value={formik.values.time}
                  label="Time"
                  onChange={(e) => {
                    formik.setFieldValue("time", e.target.value)
                  }}
                  required
                  error={
                    !!formik.errors.time && !!formik.touched.time
                  }
                >
                  <MenuItem value="">No Selected</MenuItem>
                  {fetchAPI(formik.values.date).map((time) => (
                    <MenuItem
                      key={time}
                      value={time}
                      disabled={Math.random() > 0.5}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <button type="submit" className="btn btn-primary">
                {isLoading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </section>
  )
}

export default Reservation

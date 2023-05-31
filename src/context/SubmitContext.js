import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

const SubmitContext = createContext()

export function useSubmit() {
  return useContext(SubmitContext)
}

export function SubmitProvider({ children }) {
  const navigate = useNavigate()

  async function submit(values) {
    setTimeout(
      () => navigate("/confirmation", { state: { values } }),
      2000
    )
  }

  return (
    <SubmitContext.Provider value={{ submit }}>
      {children}
    </SubmitContext.Provider>
  )
}

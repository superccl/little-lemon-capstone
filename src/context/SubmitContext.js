import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";


const SubmitContext = createContext()

export function useSubmit() {
  return useContext(SubmitContext)
}

export function SubmitProvider({children}) {
  const navigate = useNavigate()

  async function submit(values) {
    console.log(values)
    navigate('/confirmation', {state: {values}})
  }

  return <SubmitContext.Provider value={{submit}}>
    {children}
  </SubmitContext.Provider>
}
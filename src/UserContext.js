import { createContext, useState } from "react"

const UserContext = createContext()

export function UserProvider({ children }) {
  const [userValue, setUserValue] = useState("")

  const changeUser = (user) => {
    setUserValue(user)
  }

  return (
    <UserContext.Provider value={{ userValue, changeUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

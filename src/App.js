import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import "./style.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserContext from "./UserContext"
import { useContext } from "react"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`)
    })
  }
})

const link = from([errorLink, new HttpLink({ uri: "http://3.15.180.94/" })])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  const { userValue } = useContext(UserContext)

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {userValue && <Route path="/app" element={<Home />} />}
        </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App

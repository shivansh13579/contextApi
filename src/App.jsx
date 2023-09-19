
import Profile from "./components/Profile"
import Login from "./components/login"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h2>Welcome to shivam profile</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

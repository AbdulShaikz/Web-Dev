import LoginPage from "./components/LoginPage"
import Profile from "./components/Profile"
import UserContextProvider from "./context/userContextProvider"

function App() {
  
  return (
    <UserContextProvider>
      <LoginPage/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

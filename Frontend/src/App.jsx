import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './components/NavBar'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes'
// import ResponsiveAppBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
    <ResponsiveAppBar/>
      <AppRoutes></AppRoutes>

    </UserProvider>
    </>
  )
}

export default App

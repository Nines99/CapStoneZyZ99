import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './components/NavBar'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes'
// import ResponsiveAppBar from './components/NavBar'
import { ThemeProvider } from '@mui/material'
import { myTheme } from './themes/myTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={myTheme}>
    <UserProvider>
    <ResponsiveAppBar/>
    <AppRoutes></AppRoutes>
    </UserProvider>
    </ThemeProvider>
    </>
  );
}

export default App

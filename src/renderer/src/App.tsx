import { Routes, Route } from 'react-router-dom'
import SplashScreen from './components/onboard/SplashScreen'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App

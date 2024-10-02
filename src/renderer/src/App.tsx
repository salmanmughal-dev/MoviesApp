import { Routes, Route } from 'react-router-dom'
import SplashScreen from './components/onboard/SplashScreen'
import Login from './components/login/Login'
import BaseLayout from './components/base/Base'
import DashboardLayout from './components/dashboard/DashboardLayout'
function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BaseLayout />}>
          <Route path="dashboard" element={<DashboardLayout />} />
          <Route path="attendance" element={<h2>hello world222</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

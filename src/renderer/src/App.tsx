import { Routes, Route } from 'react-router-dom'
import SplashScreen from './components/onboard/SplashScreen'
import Login from './components/login/Login'
import BaseLayout from './components/base/Base'
import EmployeeForm from './components/employees/EmployeeForm'

import DashboardLayout from './components/dashboard/DashboardLayout'
import { Attendance } from './components/attendance/Attendance'
function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/edit/employee/:employeeId" element={<EmployeeForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BaseLayout />}>
          <Route path="dashboard" element={<DashboardLayout />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

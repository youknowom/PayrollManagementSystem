import React from 'react'
import Attendance from './views/attendance/Attendance'
import Timeclock from './views/timeclock/Timeclock'
import Payroll from './views/payroll/Payroll'
import Employees from './views/employees/Employees'
import Dashboard from './views/dashboard/Dashboard'
import Profile from './views/profile/Profile'
import updateEmployee from './views/employees/UpdateEmployees'
import Generatereports from './views/payroll/Generatereports'
import salary from './views/payroll/salary'

// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/profile', name: 'profile', element: Profile },
  { path: '/employees', name: 'Employees', element: Employees },
  { path: '/attendance', name: 'Attendance', element: Attendance },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/timeclock', name: 'Timeclock', element: Timeclock },
  { path: '/payroll', name: 'Payroll', element: Payroll },
  { path: '/generatereports', name: 'generatereports', element: Generatereports },
  { path: '/salary', name: 'salary', element: salary },
  { path: '/update/:id', name: 'updateEmployee', element: updateEmployee },
]

export default routes

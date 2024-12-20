import React from 'react'
import {
  Person,
  Clock,
  CardChecklist,
  Wallet,
  Pencil,
  Eye,
  Speedometer,
  Calculator,
} from 'react-bootstrap-icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <Speedometer className="nav-icon" />,
    roles: ['admin', 'user'],
  },
  {
    component: CNavGroup,
    name: 'Employees',
    to: '/employees',
    icon: <Person className="nav-icon" />,
    roles: ['admin', 'user'],
    items: [
      {
        component: CNavItem,
        name: 'Add Employee',
        to: '/employees/add',
        icon: <Pencil className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'All Employees',
        to: '/employees',
        icon: <Eye className="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Attendance',
    to: '/attendance',
    icon: <CardChecklist className="nav-icon" />,
    roles: ['user'],
  },
  // {
  //   component: CNavItem,
  //   name: 'Timeclock',
  //   to: '/timeclock',
  //   icon: <Clock className="nav-icon" />,
  //   roles: ['user'],
  // },
  {
    component: CNavGroup,
    name: 'Payroll',
    to: '/payroll',
    icon: <Wallet className="nav-icon" />,
    roles: ['admin'],
    items: [
      {
        component: CNavItem,
        name: 'Salary Calculation',
        to: '/salary',
        icon: <Calculator className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Generate Reports',
        to: '/generatereports',
        icon: <Eye className="nav-icon" />,
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Profile',
  //   to: '/profile', // Update to the route for the profile page if you have one
  //   icon: <Person className="nav-icon" />,
  //   className: 'sidebar-profile', // Optional: Add a custom class for styling
  // },
]

export default _nav

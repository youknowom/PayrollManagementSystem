import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const API_URL = 'http://localhost:8080/employee'

const Dashboard = () => {
  const [employees, setEmployees] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL)
      setEmployees(response.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  const handleCardClick = () => {
    navigate('/employees')
  }
  const handleCardClickpayroll = () => {
    navigate('/payroll')
  }

  const getNewEmployeesCount = () => {
    const today = new Date()
    const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30))
    return employees.filter((emp) => new Date(emp.createdAt) > thirtyDaysAgo).length
  }

  const getPendingPayrollsCount = () => {
    return employees.filter((emp) => emp.payrollStatus === 'Pending').length
  }

  const recentEmployees = employees.slice(-3).reverse()

  const employeeGrowthData = employees.reduce((acc, emp) => {
    const month = new Date(emp.createdAt).toLocaleString('default', { month: 'short' })
    acc[month] = acc[month] ? acc[month] + 1 : 1
    return acc
  }, {})

  const growthLabels = Object.keys(employeeGrowthData)
  const growthValues = Object.values(employeeGrowthData)

  const payrollChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Payroll Distribution',
        data: [1200, 1300, 1100, 1500, 1700],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  }

  const employeeGrowthChartData = {
    labels: growthLabels,
    datasets: [
      {
        label: 'Employee Growth',
        data: growthValues,
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
    ],
  }

  const recentActivities = [
    'Payroll processed for October 2024',
    ...recentEmployees.map((emp) => `${emp.fname} ${emp.lname} added as a new employee`),
  ]

  return (
    <div className="p-6 bg-gray-100 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div
          className="bg-white p-6 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg transition"
          onClick={handleCardClick}
        >
          <h3 className="text-base font-medium text-gray-700 mb-2">Total Employees</h3>
          <p className="text-2xl font-semibold text-rose-500">{employees.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg transition">
          <h3 className="text-xs font-medium text-gray-700 mb-2">New Employees</h3>
          <p className="text-2xl font-semibold text-rose-500">{getNewEmployeesCount()}</p>
        </div>
        <div
          className="bg-white p-6 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg transition"
          onClick={handleCardClickpayroll}
        >
          <h3 className="text-sm font-medium text-gray-700 mb-2">Pending Payrolls</h3>
          <p className="text-2xl font-semibold text-rose-500">{getPendingPayrollsCount()}</p>
        </div>
        <div
          className="bg-white p-6 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg transition"
          onClick={handleCardClickpayroll}
        >
          <h3 className="text-4xl font-medium text-gray-700 mb-2">Last Payroll Processed</h3>
          <p className="text-2xl font-semibold text-rose-500">October 10, 2024</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Payroll Distribution</h3>
          <Line data={payrollChartData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Employee Growth</h3>
          <Line data={employeeGrowthChartData} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Activities</h3>
        <ul className="divide-y divide-gray-200">
          {recentActivities.map((activity, index) => (
            <li
              key={index}
              onClick={handleCardClick}
              className="py-2 text-gray-600 hover:text-rose-500 cursor-pointer"
            >
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard

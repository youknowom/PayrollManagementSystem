import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import './dashboard.css'

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

  // Example data for Employee Growth (You would probably need to calculate this dynamically)
  const employeeGrowthData = employees.reduce((acc, emp) => {
    const month = new Date(emp.createdAt).toLocaleString('default', { month: 'short' }) // Get the month name
    acc[month] = acc[month] ? acc[month] + 1 : 1
    return acc
  }, {})

  // Convert the data into arrays for the chart
  const growthLabels = Object.keys(employeeGrowthData)
  const growthValues = Object.values(employeeGrowthData)

  // Payroll Distribution Chart Data
  const payrollChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Payroll Distribution',
        data: [1200, 1300, 1100, 1500, 1700], // Example data
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  }

  // Employee Growth Chart Data
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
    <div className="dashboard">
      <div className="dashboard-summary">
        <div className="card" onClick={handleCardClick}>
          <h3>Total Employees</h3>
          <p>{employees.length}</p>
        </div>
        <div className="card">
          <h3>New Employees</h3>
          <p>{employees.length}</p>
        </div>
        <div className="card" onClick={handleCardClickpayroll}>
          <h3>Pending Payrolls</h3>
          <p>{getPendingPayrollsCount()}</p>
        </div>
        <div className="card" onClick={handleCardClickpayroll}>
          <h3>Last Payroll Processed</h3>
          <p>October 10, 2024</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-card">
          <h3>Payroll Distribution</h3>
          <Line data={payrollChartData} />
        </div>
        <div className="chart-card">
          <h3>Employee Growth</h3>
          <Line data={employeeGrowthChartData} />
        </div>
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {recentActivities.map((activity, index) => (
            <li onClick={handleCardClick} key={index}>
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard

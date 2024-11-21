import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './dashboard.css'

const API_URL = 'http://localhost:8080/employee' // Database API URL

const Dashboard = () => {
  const [employees, setEmployees] = useState([])
  const navigate = useNavigate() // Using useNavigate hook

  useEffect(() => {
    fetchEmployees()
  }, [])

  // Function to handle card click and navigate to the employee list
  const handleCardClick = () => {
    navigate('/employees') // Use navigate to redirect
  }

  // Function to fetch employees from the API
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL)
      setEmployees(response.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  // Get the 3 most recent employees
  const recentEmployees = employees.slice(-3).reverse()

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
        <div className="card">
          <h3>Pending Payrolls</h3>
          <p>3</p>
        </div>
        <div className="card">
          <h3>Last Payroll Processed</h3>
          <p>October 10, 2024</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-card">
          <h3>Payroll Distribution</h3>
          <div className="chart-placeholder"></div>
        </div>
        <div className="chart-card">
          <h3>Employee Growth</h3>
          <div className="chart-placeholder"></div>
        </div>
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          <li>Payroll processed for October 2024</li>
          <ul>
            {recentEmployees.map((emp) => (
              <li key={emp._id}>
                {emp.fname} {emp.lname} added as a new employee
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard

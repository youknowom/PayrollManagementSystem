import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const API_URL = 'http://localhost:8080/employee'

const Employees = () => {
  const [employee, setEmployee] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchEmployee()
  }, [])

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(API_URL)
      setEmployee(response.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
      toast.error('Error fetching employees!')
    }
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      toast.success('Employee deleted successfully!')
      fetchEmployee()
    } catch (error) {
      console.error('Error deleting employee:', error)
      toast.error('Error deleting employee!')
    }
  }

  const filteredEmployee = employee.filter(
    (emp) =>
      emp.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const generateEmployeeID = () => {
    const timestamp = Date.now().toString().slice(-6)
    const randomNum = Math.floor(100 + Math.random() * 900)
    return `EMP${timestamp}${randomNum}`
  }

  const eid = generateEmployeeID()

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Employee Information</h2>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex-1"></div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left border">Employee ID</th>
              <th className="p-3 text-left border">First Name</th>
              <th className="p-3 text-left border">Last Name</th>
              <th className="p-3 text-left border">Email</th>
              <th className="p-3 text-left border">Contact</th>
              <th className="p-3 text-left border">Department</th>
              <th className="p-3 text-left border">Joining Date</th>
              <th className="p-3 text-left border">Employment Type</th>
              <th className="p-3 text-left border">Salary</th>
              <th className="p-3 text-left border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployee.map((emp) => (
              <tr key={emp._id} className="hover:bg-gray-50">
                <td className="p-3 border">{emp.eid}</td>
                <td className="p-3 border">{emp.fname}</td>
                <td className="p-3 border">{emp.lname}</td>
                <td className="p-3 border">{emp.email}</td>
                <td className="p-3 border">{emp.contact}</td>
                <td className="p-3 border">{emp.department}</td>
                <td className="p-3 border">{emp.joiningdate}</td>
                <td className="p-3 border">{emp.emptype}</td>
                <td className="p-3 border">{emp.salary}</td>
                <td className="p-3 border flex space-x-4 items-center">
                  <Link
                    to={`/update/${emp._id}`}
                    className="text-blue-600 hover:text-blue-800 text-lg"
                    title="Update"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <button
                    onClick={() => handleDelete(emp._id)}
                    className="text-red-600 hover:text-red-800 text-lg"
                    title="Delete"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employees

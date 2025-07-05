import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const API_URL = 'http://localhost:8080/employee'

const AddEmployee = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [department, setDepartment] = useState('')
  const [joiningdate, setJoiningDate] = useState('')
  const [emptype, setEmploymentType] = useState('')
  const [salary, setSalary] = useState('')
  const [gender, setGender] = useState('')

  const navigate = useNavigate()
  let employeeCounter = 0

  const generateEmployeeID = () => {
    employeeCounter += 1
    return `E${String(employeeCounter).padStart(2, '0')}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const eid = generateEmployeeID()

    try {
      const response = await axios.post(API_URL, {
        eid,
        fname,
        lname,
        email,
        contact,
        department,
        joiningdate,
        emptype,
        salary,
        gender,
      })

      if (response.status === 201 || response.status === 200) {
        toast.success('Employee added successfully!')
        setTimeout(() => navigate('/employees'), 2000)
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error('Email already exists!')
      } else {
        toast.error('Error adding employee!')
      }
      console.error('Error adding employee:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-gray-100 p-8 rounded-3xl shadow-lg">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-4 font-sans">
        Add Employee
      </h2>
      <p className="text-center text-base font-serif mb-6">
        Secure Your Future with Our Team – Join Us Today!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-600">First Name:</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-600">Last Name:</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-600">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-600">Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="10-digit number"
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-600">Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Department Name"
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-600">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-600">Joining Date:</label>
          <input
            type="date"
            value={joiningdate}
            onChange={(e) => setJoiningDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-600">Employment Type:</label>
          <input
            type="text"
            value={emptype}
            onChange={(e) => setEmploymentType(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-600">Salary:</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 active:scale-95 transition-all"
        >
          Click on submit to add employee
        </button>
      </form>
    </div>
  )
}

export default AddEmployee

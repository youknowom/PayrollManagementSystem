import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './employees.css'

const API_URL = 'http://localhost:8080/student'

const Employees = () => {
  const [students, setStudents] = useState([]) // Changed variable name to plural
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true) // Added loading state

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    setLoading(true) // Set loading to true before fetching
    try {
      const response = await axios.get(`${API_URL}/findall`)
      setStudents(response.data.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    } finally {
      setLoading(false) // Set loading to false after fetching
    }
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await axios.delete(`${API_URL}/delete/${id}`) // Ensure you have the correct API endpoint
        fetchStudents() // Refetch students after deletion
      } catch (error) {
        alert('Error deleting student')
        console.error('Error deleting student:', error)
      }
    }
  }

  const filteredStudents = students.filter(
    (student) =>
      student.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return <div>Loading...</div> // Display loading state
  }

  return (
    <div className="main">
      <div className="header-container">
        <h2>Employees</h2>
        <Link to="/employees/add">
          {' '}
          {/* Updated path */}
          <button className="button-link">Add Employee</button>
        </Link>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="formbody">
          {filteredStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.fname}</td>
              <td>{student.lname}</td>
              <td>{student.email}</td>
              <td>{student.contact}</td>
              <td>
                <Link to={`/update/${student._id}`} className="update-link">
                  Update
                </Link>
                <button className="delete-btn" onClick={() => handleDelete(student._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employees

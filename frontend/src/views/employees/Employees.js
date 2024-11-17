// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// const API_URL = 'http://localhost:8080/employee'

// const Employees = () => {
//   const [employee, setEmployee] = useState([]) // Make sure variable name is 'employee'
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     fetchEmployee() // Use fetchEmployee instead of fetchStudent
//   }, [])

//   const fetchEmployee = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/findall`)
//       setEmployee(response.data.data)
//     } catch (error) {
//       console.error('Error fetching employees:', error)
//     }
//   }

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value)
//   }

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/delete/${id}`)
//       fetchEmployee() // Use fetchEmployee instead of fetchStudent
//     } catch (error) {
//       alert('Error deleting employee')
//       console.error('Error deleting employee:', error)
//     }
//   }

//   const filteredEmployee = employee.filter(
//     (emp) =>
//       emp.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       emp.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       emp.course?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       emp.email?.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   return (
//     <div className="main">
//       <h2>Employee Registration Form</h2>
//       <p>
//         Fill out the form to apply for the training courses. You can consider your application
//         accepted after you receive a confirmation email.
//       </p>
//       <h2>Employee Information</h2>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           marginBottom: '10px',
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <Link to="/add">Add Employee</Link>
//       </div>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody className="formbody">
//           {filteredEmployee.map(
//             (
//               emp, // Use 'emp' instead of 'employee' to avoid confusion
//             ) => (
//               <tr key={emp._id}>
//                 <td>{emp.fname}</td>
//                 <td>{emp.lname}</td>
//                 <td>{emp.email}</td>
//                 <td>{emp.contact}</td>
//                 <td>{emp.course}</td>
//                 <td>
//                   <Link to={`/update/${emp._id}`}>Update</Link>
//                   <button onClick={() => handleDelete(emp._id)}>Delete</button>
//                 </td>
//               </tr>
//             ),
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Employees // Corrected export to use the updated component name
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = 'http://localhost:8080/employee'

const Employees = () => {
  const [employee, setEmployee] = useState([]) // Employee state
  const [searchTerm, setSearchTerm] = useState('')

  // Fetching employees on initial load
  useEffect(() => {
    fetchEmployee() // Fetch employees
  }, [])

  const fetchEmployee = async () => {
    try {
      // Ensure the endpoint matches the backend route
      const response = await axios.get(API_URL)
      setEmployee(response.data) // Update state with fetched data
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  // Handle delete employee action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/delete/${id}`)
      fetchEmployee() // Refresh the list after deletion
    } catch (error) {
      alert('Error deleting employee')
      console.error('Error deleting employee:', error)
    }
  }

  // Filter employee list based on search term
  const filteredEmployee = employee.filter(
    (emp) =>
      emp.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="main">
      <h2>Employee Registration Form</h2>
      <p>
        Fill out the form to apply for the training courses. You can consider your application
        accepted after you receive a confirmation email.
      </p>
      <h2>Employee Information</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Link to="/add">Add Employee</Link>
      </div>
      <table border="1" cellPadding="10">
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
          {filteredEmployee.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.fname}</td>
              <td>{emp.lname}</td>
              <td>{emp.email}</td>
              <td>{emp.contact}</td>
              <td>
                <Link to={`/update/${emp._id}`}>Update</Link>
                <button onClick={() => handleDelete(emp._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employees

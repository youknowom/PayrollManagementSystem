// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom' // Use useNavigate instead of useHistory
// import './addEmployee.css' // Importing the updated CSS

// const API_URL = 'http://localhost:8080/student'

// const AddEmployee = () => {
//   const [fname, setFname] = useState('')
//   const [lname, setLname] = useState('')
//   const [email, setEmail] = useState('')
//   const [contact, setContact] = useState('')
//   const navigate = useNavigate() // Use useNavigate instead of useHistory

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       await axios.post(API_URL, {
//         fname,
//         lname,
//         email,
//         contact,
//       })
//       navigate('/employees') // Use navigate to redirect
//     } catch (error) {
//       alert('Error adding employee')
//       console.error('Error adding employee:', error)
//     }
//   }

//   return (
//     <div className="add-employee">
//       <h2>Add Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} required />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} required />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div>
//           <label>Contact:</label>
//           <input
//             type="text"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add Employee</button>
//       </form>
//     </div>
//   )
// }

// export default AddEmployee

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './addEmployee.css'

const API_URL = 'http://localhost:8080/student'

const AddEmployee = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post(API_URL, {
        fname,
        lname,
        email,
        contact,
      })
      navigate('/employees')
    } catch (error) {
      alert('Error adding employee')
      console.error('Error adding employee:', error)
    }
  }

  return (
    <div className="add-employee">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default AddEmployee

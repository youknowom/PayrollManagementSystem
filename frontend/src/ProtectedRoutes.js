import React from 'react'
import { Navigate } from 'react-router-dom' // Correct import for Navigate

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token') // Check for a valid token

  // Redirect to login if the user is not authenticated
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute

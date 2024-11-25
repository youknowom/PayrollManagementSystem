import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
} from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import navigation from '../_nav'

const AppSidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  // Function to handle sidebar brand click and navigate to dashboard
  const handleCardClick = () => {
    navigate('/dashboard') // Navigate to the dashboard
  }

  // Function to handle logout
  const handleLogout = () => {
    // Here you can dispatch a logout action or clear the user's session
    // For now, it will navigate to the login page and reset the state
    // Example: dispatch(logoutAction());
    navigate('/login') // Redirect to login page on logout
  }

  return (
    <CSidebar
      className="border-end sidebar"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/" className="text-center" style={{ textDecoration: 'none' }}>
          <span
            onClick={handleCardClick} // Call handleCardClick on click
            className="sidebar-brand-text"
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#000',
              display: 'block',
              padding: '10px 0',
              cursor: 'pointer',
            }}
          >
            Stedfast
          </span>
        </CSidebarBrand>

        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>

      <AppSidebarNav items={navigation} />

      <CSidebarFooter className="border-top d-none d-lg-flex">
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#ff5c5c', // Red color for logout button
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%', // Make button fill the available width
          }}
        >
          Logout
        </button>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

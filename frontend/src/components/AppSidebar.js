import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
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
    navigate('/dashboard') // Redirect to dashboard on click
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
              color: '#000', // Adjust color as needed
              display: 'block',
              padding: '10px 0', // Adds some padding for spacing
              cursor: 'pointer', // Add cursor pointer here
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
        {/* <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        /> */}
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

// // import React, { useEffect, useRef } from 'react'
// // import { NavLink } from 'react-router-dom'
// // import { useSelector, useDispatch } from 'react-redux'
// // import {
// //   CContainer,
// //   CDropdown,
// //   CDropdownItem,
// //   CDropdownMenu,
// //   CDropdownToggle,
// //   CHeader,
// //   CHeaderNav,
// //   CHeaderToggler,
// //   CNavLink,
// //   CNavItem,
// //   useColorModes,
// // } from '@coreui/react'
// // import CIcon from '@coreui/icons-react'
// // import {
// //   cilBell,
// //   cilContrast,
// //   cilEnvelopeOpen,
// //   cilList,
// //   cilMenu,
// //   cilMoon,
// //   cilSun,
// // } from '@coreui/icons'

// // import { AppBreadcrumb } from './index'
// // import { AppHeaderDropdown } from './header/index'

// // const AppHeader = () => {
// //   const headerRef = useRef()
// //   const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

// //   const dispatch = useDispatch()
// //   const sidebarShow = useSelector((state) => state.sidebarShow)

// //   useEffect(() => {
// //     document.addEventListener('scroll', () => {
// //       headerRef.current &&
// //         headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
// //     })
// //   }, [])

// //   return (
// //     <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
// //       <CContainer className="border-bottom px-4" fluid>
// //         <CHeaderToggler
// //           onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
// //           style={{ marginInlineStart: '-14px' }}
// //         >
// //           <CIcon icon={cilMenu} size="lg" />
// //         </CHeaderToggler>
// //         <CHeaderNav className="d-none d-md-flex">
// //           <CNavItem>
// //             <CNavLink to="/dashboard" as={NavLink}>
// //               {/* Dashboard */}
// //             </CNavLink>
// //           </CNavItem>
// //           {/* <CNavItem>
// //             <CNavLink href="#">Users</CNavLink>
// //           </CNavItem>
// //           <CNavItem>
// //             <CNavLink href="#">Settings</CNavLink>
// //           </CNavItem> */}
// //         </CHeaderNav>
// //         <CHeaderNav className="ms-auto">
// //           {/* <CNavItem>
// //             <CNavLink href="#">
// //               <CIcon icon={cilBell} size="lg" />
// //             </CNavLink>
// //           </CNavItem> */}
// //           {/* <CNavItem>
// //             <CNavLink href="#">
// //               <CIcon icon={cilList} size="lg" />
// //             </CNavLink>
// //           </CNavItem> */}
// //           {/* <CNavItem>
// //             <CNavLink href="#">
// //               <CIcon icon={cilEnvelopeOpen} size="lg" />
// //             </CNavLink>
// //           </CNavItem> */}
// //         </CHeaderNav>
// //         <CHeaderNav>
// //           {/* <li className="nav-item py-1">
// //             <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
// //           </li> */}
// //           {/* <CDropdown variant="nav-item" placement="bottom-end">
// //             <CDropdownToggle caret={false}>
// //               {colorMode === 'dark' ? (
// //                 <CIcon icon={cilMoon} size="lg" />
// //               ) : colorMode === 'auto' ? (
// //                 <CIcon icon={cilContrast} size="lg" />
// //               ) : (
// //                 <CIcon icon={cilSun} size="lg" />
// //               )}
// //             </CDropdownToggle>
// //             <CDropdownMenu>
// //               <CDropdownItem
// //                 active={colorMode === 'light'}
// //                 className="d-flex align-items-center"
// //                 as="button"
// //                 type="button"
// //                 onClick={() => setColorMode('light')}
// //               >
// //                 <CIcon className="me-2" icon={cilSun} size="lg" /> Light
// //               </CDropdownItem>
// //               <CDropdownItem
// //                 active={colorMode === 'dark'}
// //                 className="d-flex align-items-center"
// //                 as="button"
// //                 type="button"
// //                 onClick={() => setColorMode('dark')}
// //               >
// //                 <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
// //               </CDropdownItem>
// //               <CDropdownItem
// //                 active={colorMode === 'auto'}
// //                 className="d-flex align-items-center"
// //                 as="button"
// //                 type="button"
// //                 onClick={() => setColorMode('auto')}
// //               >
// //                 <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
// //               </CDropdownItem>
// //             </CDropdownMenu>
// //           </CDropdown> */}
// //           {/* <li className="nav-item py-1">
// //             <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
// //           </li> */}
// //           <AppHeaderDropdown />
// //         </CHeaderNav>
// //       </CContainer>
// //       <CContainer className="px-4" fluid>
// //         <AppBreadcrumb />
// //       </CContainer>
// //     </CHeader>
// //   )
// // }

// // export default AppHeader
// import React, { useEffect, useRef } from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   CContainer,
//   CHeader,
//   CHeaderNav,
//   CHeaderToggler,
//   CNavLink,
//   CNavItem,
//   useColorModes,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilMenu } from '@coreui/icons'

// import { AppBreadcrumb } from './index'
// // import { AppHeaderDropdown } from './header/index' // Commented out if not needed

// const AppHeader = () => {
//   const headerRef = useRef()
//   const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

//   const dispatch = useDispatch()
//   const sidebarShow = useSelector((state) => state.sidebarShow)

//   useEffect(() => {
//     document.addEventListener('scroll', () => {
//       headerRef.current &&
//         headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
//     })
//   }, [])

//   return (
//     <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
//       <CContainer className="border-bottom px-4" fluid>
//         <CHeaderToggler
//           onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
//           style={{ marginInlineStart: '-14px' }}
//         >
//           <CIcon icon={cilMenu} size="lg" />
//         </CHeaderToggler>
//         <CHeaderNav className="d-none d-md-flex">
//           <CNavItem>
//             <CNavLink to="/dashboard" as={NavLink}>
//               {/* Dashboard */}
//             </CNavLink>
//           </CNavItem>
//         </CHeaderNav>
//         <CHeaderNav className="ms-auto">
//           {/* Additional navigation items can go here if needed */}
//         </CHeaderNav>
//         <CHeaderNav>
//           {/* Remove or comment out the AppHeaderDropdown to remove the profile section */}
//           {/* <AppHeaderDropdown /> */}
//         </CHeaderNav>
//       </CContainer>
//       <CContainer className="px-4" fluid>
//         <AppBreadcrumb />
//       </CContainer>
//     </CHeader>
//   )
// }

// export default AppHeader
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CHeader, CHeaderNav, CHeaderToggler, CNavLink, CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'

const AppHeader = () => {
  const headerRef = useRef()
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink to="/dashboard" as={NavLink}>
              {/* Dashboard */}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-auto">
          {/* Profile Section */}
          <div className="profile-section d-flex align-items-center">
            <img
              src="/path-to-profile-image.jpg" // Replace with the actual profile image path
              alt="Profile"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '40%',
                marginRight: '10px',
              }}
            />
            <span style={{ fontWeight: 'light' }}>John Doe</span>{' '}
            {/* Replace with actual user name */}
          </div>
        </CHeaderNav>
      </CContainer>
      <CContainer className="px-4" fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader

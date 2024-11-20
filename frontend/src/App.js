// export default App
import React, { Suspense } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner } from '@coreui/react'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const AddEmployee = React.lazy(() => import('./views/employees/AddEmployee'))
const UpdateEmployees = React.lazy(() => import('./views/employees/UpdateEmployees')) // Add the UpdateEmployee component

const App = () => {
  const storedTheme = useSelector((state) => state.theme)

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="/employees/update/:id" element={<UpdateEmployees />} />{' '}
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App

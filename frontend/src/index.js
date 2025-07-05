// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
// import 'core-js'

// import App from './App'
// import store from './store'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js' // Polyfills for older browsers if needed

import App from './App' // Your main app component
import store from './store' // Your Redux store
import '../src/index.css' // ✅ Tailwind styles

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {' '}
    <React.StrictMode>
      {' '}
      <App />
    </React.StrictMode>
  </Provider>,
)

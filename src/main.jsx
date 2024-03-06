import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="45453497135-jpj9r1sm8d64t4k3srqb02puoluvtg0i.apps.googleusercontent.com">
          <App />
      </GoogleOAuthProvider>
  </React.StrictMode>,
)

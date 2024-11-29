import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import AppStore from "./context/AppStore"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <AppStore>
        <App />
      </AppStore>
    </Router>
  </React.StrictMode>
)

reportWebVitals()

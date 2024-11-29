import React from "react"
import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import LogonPage from "./components/LogonPage"

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<LogonPage />} />
          <Route path="/main" element={<Home />} />
        </Routes>
    </>
  )
}

export default App

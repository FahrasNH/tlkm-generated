import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/templates/Layout'
import Users from './pages/Users'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </Layout>
  )
}

export default App

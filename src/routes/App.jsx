import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound'

import '../styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

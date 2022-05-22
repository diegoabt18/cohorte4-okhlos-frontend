import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ContainerLogin } from './components/organisms'
import PaginaAdmin from './pages/PaginaAdmin'
import EstudentPageLoad from './pages/EstudentPageLoad'
import ManageStudent from './pages/ManageStudent'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<ContainerLogin />} />
        <Route path={"/Dashboard"} element={<PaginaAdmin >
          <Dashboard />
        </PaginaAdmin>} />
        <Route path={"/EstudentLoad"} element={<PaginaAdmin >
          <EstudentPageLoad />
        </PaginaAdmin>} />
        <Route path={"/EstudentManage"} element={<PaginaAdmin >
          <ManageStudent />
        </PaginaAdmin>} />
       
      </Routes>
    </div>
  )
}

export default App

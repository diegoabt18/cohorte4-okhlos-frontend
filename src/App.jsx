import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ContainerLogin } from './components/organisms'
import PaginaAdmin from './pages/PaginaAdmin'
import EstudentPageLoad from './pages/EstudentPageLoad'
import MentorPageLoad from './pages/MentorPageLoad'
import ManageStudent from './pages/ManageStudent'
import ManageMentor from './pages/ManageMentor'
import Dashboard from './pages/Dashboard'
import { PlantillaMatch } from './components/templates'
import { Icon } from '@iconify/react'

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
        <Route path={"/MentorLoad"} element={<PaginaAdmin >
          <MentorPageLoad />
        </PaginaAdmin>} />
        <Route path={"/MentorManage"} element={<PaginaAdmin >
          <ManageMentor />
        </PaginaAdmin>} />
        <Route path={"/PlantillaMatch"} element={<PaginaAdmin >
          <PlantillaMatch />
        </PaginaAdmin>} />
      </Routes>
      
    </div>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ContainerLogin } from './components/organisms'
import { PlantillaMatch } from './components/templates'
import PaginaAdmin from './pages/PaginaAdmin'
import EstudentPageLoad from './pages/EstudentPageLoad'
import MentorPageLoad from './pages/MentorPageLoad'
import ManageStudent from './pages/ManageStudent'
import ManageMentor from './pages/ManageMentor'
import Dashboard from './pages/Dashboard'
import Sesiones from './pages/Sesiones'
import {  RequireAuth, Layout } from './components/atoms'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Routes path={"/"} element={<Layout />} >
        <Route path={"/"} element={<ContainerLogin />} />
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/Dashboard"} element={<PaginaAdmin >
            <Dashboard />
          </PaginaAdmin>} />
        </Route>
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
        <Route path={"/Sesiones"} element={<PaginaAdmin>
          <Sesiones />
        </PaginaAdmin>} />
      </Routes>
    </div>
  );
}

export default App

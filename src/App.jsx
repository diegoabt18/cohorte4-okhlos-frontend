import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContainerLogin from './components/organisms/ContainerLogin'
import PlantillaMatch from './components/templates/PlantillaMatch'
import PaginaAdmin from './pages/PaginaAdmin'
import EstudentPageLoad from './pages/EstudentPageLoad'
import MentorPageLoad from './pages/MentorPageLoad'
import ManageStudent from './pages/ManageStudent'
import ManageMentor from './pages/ManageMentor'
import Dashboard from './pages/Dashboard'
import Sesiones from './pages/Sesiones'
import RequireAuth from './components/atoms/RequireAuth'
import Layout from './components/atoms/Layout'
import Unauthorized from './components/atoms/Unauthorized'


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Routes path={"/"} element={<Layout />} >
        {/*rutas publicas*/}
        <Route path={"/"} element={<ContainerLogin />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/*rutas privadas*/}
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/Dashboard"} element={<PaginaAdmin >
            <Dashboard />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/EstudentLoad"} element={<PaginaAdmin >
            <EstudentPageLoad />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/EstudentManage"} element={<PaginaAdmin >
            <ManageStudent />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/MentorLoad"} element={<PaginaAdmin >
            <MentorPageLoad />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/MentorManage"} element={<PaginaAdmin >
            <ManageMentor />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/PlantillaMatch"} element={<PaginaAdmin >
            <PlantillaMatch />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/Sesiones"} element={<PaginaAdmin>
            <Sesiones />
          </PaginaAdmin>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App

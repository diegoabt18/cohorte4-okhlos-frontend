import React, { useState } from "react";
import { PageOptionsTitle } from "../molecules";
import { MatchTableOptions, TableMatch, } from "../organisms";
import { ModalUpdate } from "../molecules";
import { InfoMatch, ModalAlert } from "../atoms";
import { useSelector, useDispatch } from "react-redux";
import { matchMassive } from "../../redux/slices/loadDataMatchSlice";
import { selectDataEstudentApi } from "../../redux/slices/DataApiEstudentSlice";
import studentServices from "../../api/services/studentServices";



const PlantillaMatch = () => {
  const dispatch = useDispatch()
  const students = useSelector(selectDataEstudentApi)
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [datainfo, setDatainfo] = useState("")
  const [datos, setDatos] = useState({
    data: [],
    file: true,
    columnas: [["idEstudiante", "Estudiante", "IdMentor", "Mentor", "Puntaje"]],
    codeColumnas: ["idStudent", "nameStudent", "mentorId", "nameMentor", "mentorScore"]
  })
  const [DataForm, setDataForm] = useState({
    idStudent: 0,
    mentorId: 0,
    mentorScore: 0,
    nameMentor: "",
    nameStudent: "",
    porcentajeScoreAge: 0,
    porcentajeScoreIHigh: 0,
    porcentajeScoreIlow: 0,
  });
  function loadDataModal(data) {
    console.log(data)
    setDataForm({
      ...DataForm,
      idStudent: data[0],
      mentorId: data[1],
      email: data[2],
      age: data[3],
      phone: data[4],
      gender: data[5],
      status: data[6],
      idcargo:data[7], 
      idbussiness:data[8], 
      idstudies:data[9], 
      hijos:data[10] , 
      numstudents:data[11], 
    })
  }

  function domatch() {
    var arraystudent = []
    if (students) {
      for (let index = 0; index < students.data.length; index++) {
        arraystudent.push(students.data[index][0])
      }
      const matchresponse = dispatch(matchMassive(arraystudent))
      matchresponse.then(res => {
        console.log(res.payload)
        if (res.payload) {
          setDatos(datos => {
            return {
              ...datos,
              data: res.payload,
              file: true
            }
          })
          ModalAlert("Match Ok", "Se realizo el match satisfactoriamente", "success")
        } else {
          //setDatos()
          ModalAlert("Match Error", "No se pudo realizar el match", "error")
        }
      })
      console.log(arraystudent)
      console.log(students)
    }

  }



  function setmodal(data) {
    setOpen(true)
    setDatainfo(data)
    console.log(data)
  }
  console.log(datainfo)
  return (
    <div className='grid' >
      <ModalUpdate state={open} setState={setOpen} title={"Datalle del match"}>
        <InfoMatch ptotal={datainfo.mentorScore} pedad={datainfo.porcentajeScoreAge} pinteresmayor={datainfo.porcentajeScoreIHigh} pinteresmenor={datainfo.porcentajeScoreIlow} />
      </ModalUpdate>
      <ModalUpdate state={openEdit} setState={setOpenEdit} title={"Editar Match"}>
        {DataForm}
      </ModalUpdate>
      <div className='pt-6 pb-4 px-4 font-Roboto font-bold'>
        <PageOptionsTitle text={"Realizar Match"} />
        <MatchTableOptions func={studentServices.getStudentCohort} funcMatch={domatch} />
      </div>
      <div>
        <TableMatch datos={datos} loadDataModal={loadDataModal} setModal={setmodal} setModalEdit={setOpenEdit} />
      </div>
    </div>
  );
};

export default PlantillaMatch;

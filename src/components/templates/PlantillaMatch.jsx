import React, { useState } from "react";
import {PageOptionsTitle} from "../molecules";
import {MatchTableOptions, TableMatch, } from "../organisms";
import { ModalUpdate } from "../molecules";
import { InfoMatch } from "../atoms";
import { useSelector, useDispatch } from "react-redux";
import { matchMassive } from "../../redux/slices/loadDataMatchSlice";
import { selectDataEstudentApi } from "../../redux/slices/DataApiEstudentSlice";
import studentServices from "../../api/services/studentServices";


const masivo = [{mentorId:1, mentorScore:80, idStudent:1, nameStudent:"javier", nameMentor:"tavo", porcentajeScoreLow:20, porcentajeScoreHigh:80, porcentajeScoreAge:50},
{mentorId:2, mentorScore:80, idStudent:2, nameStudent:"javier", nameMentor:"tavo", porcentajeScoreLow:20, porcentajeScoreHigh:80, porcentajeScoreAge:50},
{mentorId:3, mentorScore:80, idStudent:3, nameStudent:"javier", nameMentor:"tavo", porcentajeScoreLow:20, porcentajeScoreHigh:80, porcentajeScoreAge:50},
{mentorId:4, mentorScore:180, idStudent:4, nameStudent:"javier", nameMentor:"tavo", porcentajeScoreLow:20, porcentajeScoreHigh:80, porcentajeScoreAge:50}]



const PlantillaMatch = () => {
  const dispatch = useDispatch()
  const students = useSelector(selectDataEstudentApi)
  function domatch(){
    var arraystudent = []
    if (students){
    for (let index = 0; index < students.data.length; index++) {
      arraystudent.push(students.data[index][0]) 
    }  
      dispatch(matchMassive(arraystudent))  
      console.log(arraystudent)
      console.log(students)
    } 
    
  }
  const[open, setOpen ] = useState (false)
  const[datainfo, setDatainfo ] = useState ("")
  const datos={    
    data:masivo,
    file:true,
    columnas:[["idEstudiante", "Estudiante", "IdMentor","Mentor", "Puntaje" ]],
    codeColumnas:["idStudent",  "nameStudent", "mentorId", "nameMentor", "mentorScore"]
  }


function setmodal(data){
setOpen(true)
setDatainfo(data)
console.log(data)
}

  return (
    <div className='grid' >
      <ModalUpdate state={open} setState={setOpen}>
      <InfoMatch ptotal={datainfo.mentorScore} pedad={datainfo.porcentajeScoreAge} pinteresmayor={datainfo.porcentajeScoreHigh} pinteresmenor={datainfo.porcentajeScoreLow}  />
      </ModalUpdate>      
      <div className='pt-6 pb-4 px-4 font-Roboto font-bold'>
            <PageOptionsTitle text={"Realizar Match"} />
            <MatchTableOptions func={studentServices.getStudentCohort} funcMatch={domatch} />
      </div>

      <div>
        <TableMatch datos={datos} setModal={setmodal} />
      </div>
    </div>
  );
};

export default PlantillaMatch;

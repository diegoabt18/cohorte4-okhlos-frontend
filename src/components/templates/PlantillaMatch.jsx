import React, { useState } from "react";
import {PageOptionsTitle} from "../molecules";
import {MatchTableOptions, TableMatch, } from "../organisms";
import { ModalUpdate } from "../molecules";
import { InfoMatch } from "../atoms";
import studentServices from "../../api/services/studentServices";
import { useSelector } from "react-redux";
import { selectDataEstudentApi } from "../../redux/slices/DataApiEstudentSlice";

const masivo = [{mentorId:1, mentorScore:80, idStudent:1, nameStudent:"javier", nameMentor:"tavo", porcentajeScoreLow:20, porcentajeScoreHigh:80, porcentajeScoreAge:50},
{mentorId:2, mentorScore:80, idStudent:2, nameStudent:"javier", nameMentor:"tavo", porcentajeScoreLow:20, porcentajeScoreHigh:80, porcentajeScoreAge:50},
{mentorId:3, mentorScore:80, idStudent:3, nameStudent:"javier", nameMentor:"tavo", porcentajeScoreLow:20, porcentajeScoreHigh:80, porcentajeScoreAge:50},
{mentorId:4, mentorScore:180, idStudent:4, nameStudent:"javier", nameMentor:"tavo", porcentajeScoreLow:20, porcentajeScoreHigh:80, porcentajeScoreAge:50}]



const PlantillaMatch = () => {
  const dataapi = useSelector(selectDataEstudentApi)
  console.log(dataapi)
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
            <MatchTableOptions func={studentServices.getStudentCohort}  />
      </div>

      <div>
        <TableMatch datos={datos} setModal={setmodal} />
      </div>
    </div>
  );
};

export default PlantillaMatch;

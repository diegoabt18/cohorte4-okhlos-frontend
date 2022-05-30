import React, { useEffect, useState } from "react";
import {CardsInfo} from "../molecules";
import studentServices from "../../api/services/studentServices";
import mentorServices from "../../api/services/mentorServices";

const CardsInfoGeneral = () => {
  const [mentores, setMentores] = useState(0)
  const [estudiantes, setEstudiantes] = useState(0)
  useEffect (()=>{
    const students = studentServices.getAllStudents();
    students.then (res => {
      setEstudiantes(res.length)
      console.log(res.length)
    })
    const mentors = mentorServices.getAllMentor();
    mentors.then (res => {
      setMentores(res.length)
      console.log(res.length)
    }) 

  },[])
  return (
    <div className="font-Roboto p-4">
      <h2 className="text-[1.3rem]">Informe General: Programate</h2>
      <div className="grid grid-cols-4 gap-6">
        <div >
          <CardsInfo dato= {estudiantes} text={"Estudiantes"} color={"bg-PrimarioColor1"} />
        </div>
        <div >
          <CardsInfo dato={mentores} text={"Mentores"} color={"bg-PrimarioColor4"} />
        </div>
        <div >
          <CardsInfo dato={50} text={"Match Est."} color={"bg-PrimarioColor1"} />
        </div>
        <div >
          <CardsInfo dato={300} text={"Estudiantes"} color={"bg-PrimarioColor4"} />
        </div>

      </div>
    </div>
  );
};

export default CardsInfoGeneral;

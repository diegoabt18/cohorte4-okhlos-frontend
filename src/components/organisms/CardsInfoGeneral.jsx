import React, { useEffect, useState } from "react";
import { CardsInfo } from "../molecules";
import studentServices from "../../api/services/studentServices";
import mentorServices from "../../api/services/mentorServices";

const CardsInfoGeneral = () => {
    const [mentores, setMentores] = useState(0)
    const [estudiantes, setEstudiantes] = useState(0)
    useEffect(() => {
        const students = studentServices.getAllStudents();
        students.then(res => {
            setEstudiantes(res.length)
            console.log(res.length)
        })
        const mentors = mentorServices.getAllMentor();
        mentors.then(res => {
            setMentores(res.length)
            console.log(res.length)
        })

    }, [])
    return (
        <div className="font-Roboto gap-5 p-3 text-center ">
            <h2 className="text-[1.3rem]">Informe General: Programate</h2>
            <div className="
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:grid 
                sm:grid-cols-2 
                sm:gap-6
                md:grid-cols-4
            ">
                <div >
                    <CardsInfo dato={estudiantes} text={"Estudiantes"} color={"bg-PrimarioColor1"} />
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

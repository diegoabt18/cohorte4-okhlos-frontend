import React from "react";
import {CardsInfo} from "../molecules";

const CardsInfoGeneral = () => {
  return (
    <div className="font-Roboto p-4">
      <h2 className="text-[1.3rem]">Informe General: Programate</h2>
      <div className="grid grid-cols-4 gap-6">
        <div >
          <CardsInfo dato={200} text={"Estudiantes"} color={"bg-PrimarioColor1"} />
        </div>
        <div >
          <CardsInfo dato={98} text={"Mentores"} color={"bg-PrimarioColor4"} />
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

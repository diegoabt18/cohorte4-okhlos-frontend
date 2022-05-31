import React, { useState, useEffect } from "react";
import studentServices from "../../api/services/studentServices";
import { InputNombre, BasicComboForm, BasicButton, ModalAlert } from "../atoms";
import { ComboBoxPreferStudent } from "./";

const DataStudent = () => {
  const [program, setprogram] = useState([]);
  const [multiOption, setMultiopcion] = useState([]);
  const [DataForm, setDataForm] = useState({
    name: "",
    email: "",
    cohorte: null,
    age: null,
    phone: null,
    status: 1,
    gender: "",
    program: "",
    intmenor: null,
    intmayor: null,
  });
  console.log(multiOption);
  console.log(DataForm);

  function selectOption(event) {
    setDataForm({
      ...DataForm,
      gender: event.value,
    });
  }

  function selectOptionProgram(event) {
    console.log(event)
    setDataForm({
      ...DataForm,
      program: event.label,
    });
  }


  function submmit() {
    const form = [
      DataForm.name,
      DataForm.email,
      parseInt(DataForm.cohorte),
      parseInt(DataForm.age),
      parseInt(DataForm.phone),
      DataForm.status,
      DataForm.gender,
      DataForm.program,
      parseInt(multiOption[1].value),
      parseInt(multiOption[0].value),
    ];
    studentServices.registerStudent(form);
    setTimeout(() => {
      ModalAlert("Ok", "Registro Estudiante Efectuado", "success")
    }, 2000)
  }

  const handleInputChange = (event) => {
    setDataForm({
      ...DataForm,
      [event.target.name]: event.target.value,
    });
  };
  const options = [
    { value: "femenino", label: "Femenino" },
    { value: "masculino", label: "Masculino" },
    { value: "prefieronodecirlo", label: "Prefiero no decirlo" },
  ];

  useEffect(() => {
    const programa = studentServices.getProgram();
    programa.then((res) => {
      setprogram(res);
    });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 w-full gap-5 sm:grid-cols">
        <div>
          <InputNombre
            func={handleInputChange}
            text={"Nombres y Apellidos"}
            name={"name"}
            type={"text"}
            placeholder={"Escribe Nombres y Apellidos"}
          />
        </div>
        <div>
          <InputNombre
            func={handleInputChange}
            text={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Ingresa tu Email"}
          />
        </div>
        <div>
          <InputNombre
            func={handleInputChange}
            text={"Cohorte"}
            name={"cohorte"}
            type={"number"}
            placeholder={"Ingresa Cohorte"}
          />
        </div>

        <div>
          <InputNombre
            func={handleInputChange}
            text={"Edad"}
            name={"age"}
            type={"number"}
            placeholder={"Ingresa tu Edad"}
          />
        </div>
        <div>
          <InputNombre
            func={handleInputChange}
            text={"Teléfono"}
            name={"phone"}
            type={"number"}
            placeholder={"Ingresa tu número telefónico"}
          />
        </div>
        <div>
          <BasicComboForm
            func={selectOption}
            text={"Género"}
            options={options}
          />
        </div>
        <div>
          <ComboBoxPreferStudent
            setFunc={setMultiopcion}
            state={multiOption}
            text={"Preferencias"}
          />
          <p className="font-GilroyLight font-semibold ">
            Seleccionar el tema de mayor interes, luego el de menor interes.
          </p>
        </div>
        <div>
          <BasicComboForm
            func={selectOptionProgram}
            text={"Programa"}
            options={program}
          />
        </div>

      </div>
      <div className="flex justify-end w-full ">
        <BasicButton func={submmit} text={"Submit"} />
      </div>

    </div>
  );
};

export default DataStudent;

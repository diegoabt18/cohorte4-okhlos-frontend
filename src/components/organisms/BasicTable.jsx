import React from 'react'
import { Icon } from '@iconify/react'
import { ButtonTable } from '../atoms'

const BasicTable = ({ datos, func, setState, loadDataModal }) => {

  /*function loadDataModal(data) {
    console.log(data)
    setDataForm({
      ...DataForm,
      id: data[0],
      name: data[1],
      email: data[2],
      cohorte: data[3],
      age: data[4],
      phone: data[5],
      status: data[6],
      gender: data[7],
      program: data[8],
      intmenor: null,
      intmayor: null,
    })
  }*/

  return (
    <div className="font-GilroyLight h-[60vh] ">
      <table className="  table table-zebra table-compact w-full ">
        <thead className=" font-Roboto">
          <tr className=" w-full">
            {datos.file ? (
              datos.columnas[0].map((c, index) => (
                <th
                  className="bg-PrimarioColor2 text-black font-extrabold"
                  key={index}
                >
                  {c}
                </th>
              ))
            ) : (
              <th>
                <div className="flex">
                  <Icon
                    className=" text-[4rem]"
                    icon={"eos-icons:bubble-loading"}
                  />
                  Loading Data
                </div>
              </th>
            )}

            {datos.file ? (
              <th className="bg-PrimarioColor2 text-black font-extrabold">
                acciones
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {datos.file ? (
            datos.data.map((r, i) => (
              <tr className="hover" key={i}>
                {datos.columnas[0].map((c, index) => (
                  <td key={index}>{r[index]}</td>
                ))}
                <td className="flex gap-2">
                  <button type="button" onClick={() => { loadDataModal(r); setState(true); }} className=" rounded-md  inline-flex items-center hover:text-PrimarioColor1 justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <Icon className={"text-[1.5rem] text-PrimarioColor2 hover:text-PrimarioColor1"} style={{ display: 'inline' }} icon="eva:edit-2-outline" />
                  </button>
                  <ButtonTable func={func}
                    id={r[0]}
                    icon={"ic:baseline-person-off"}
                    color={r[6] == 1 ? "text-red-500" : "text-gray-500"}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BasicTable
import React from 'react'
import { Icon } from '@iconify/react'
import { ButtonTable } from '../atoms'

const TableMatch = ({ datos, setModal, setModalEdit }) => {
console.log(datos)
  return (
    <div className="font-GilroyLight h-[60vh] ">
      <table className="table-zebra table-compact w-full ">
        <thead className=" font-Roboto">
          <tr className="w-full">
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
                {datos.codeColumnas.map((index) => (
                  <td key={index}>{r[index]}</td>
                ))}
                <td className="gap-2 h-full">
                  <div className='h-full'>
                  <button onClick={()=>setModalEdit(true)} type="button" className="rounded-md inline-flex items-center hover:text-PrimarioColor1 justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <Icon className={"text-[1.5rem] text-PrimarioColor2 hover:text-PrimarioColor1"} style={{ display: 'inline' }} icon="eva:edit-2-outline" />
                  </button>
                  <ButtonTable 
                    id={r}
                    func={setModal}
                    icon={"el:eye-open"}
                    color={r[6] == 1 ? "text-PrimarioColor2" : "text-black-700"}
                  />
                  </div>
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

export default TableMatch
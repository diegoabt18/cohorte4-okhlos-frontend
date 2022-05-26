import React from 'react'
import { ButtonTable } from '../atoms'
import { Icon } from '@iconify/react'

const BasicTable = ({ datos }) => {
    console.log(datos.data)
    
    return (
      <div className="font-GilroyLight h-[60vh] ">
        <table className=" table table-zebra table-compact w-full ">
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
                    <ButtonTable
                      icon={"eva:edit-2-outline"}
                      color={"text-PrimarioColor2"}
                    />
                    <ButtonTable
                      icon={"fluent:delete-48-regular"}
                      color={"text-red-500"}
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
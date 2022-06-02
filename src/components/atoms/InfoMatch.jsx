import React from 'react'

const InfoMatch = ({ptotal, pinteresmayor, pinteresmenor, pedad}) => {
  return (
    <div>
        <h1>Informacion Match</h1>
        <table>
            <thead>
                <tr>
                    <th>Porcentaje Total</th>
                    <th>Porcentaje Interés Menor</th>
                    <th>Porcentaje Interés Mayor</th>
                    <th>Porcentaje Edad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    {ptotal}
                    </td>
                    <td>
                    {pinteresmayor}
                    </td>
                    <td>
                    {pinteresmenor}
                    </td>
                    <td>
                    {pedad}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default InfoMatch
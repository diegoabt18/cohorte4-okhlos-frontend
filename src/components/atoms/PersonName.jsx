import React from 'react'
import authServices from '../../api/services/authServices'

const PersonName = () => {
  const user=authServices.isLogin()
  console.log(user)
  return (
    <p className='text-center  font-Roboto font-bold'>
        Diego Botello
    </p>
  )
}

export default PersonName
import React from 'react'
import { IconMenu } from '../atoms'
import { NavLink } from 'react-router-dom'

const OnlyItemMenu = ({ icon, text, toLink }) => {
  return (
    <div className='pl-4 py-1'>
      <NavLink to={toLink} >
        <IconMenu icon={icon} text={text} />
      </NavLink>

    </div>


  )
}

export default OnlyItemMenu
import React from 'react'
import {BasicButtonIcon} from '../atoms'


const SocialMedia = () => {
  return (
        <div className='flex gap-3 p-2' >
        <BasicButtonIcon icon={'akar-icons:facebook-fill'} color={'white'} w={'25px'} />
        <BasicButtonIcon icon={'bi:instagram'} color={'white'} w={'25px'}/>
        <BasicButtonIcon icon={'akar-icons:linkedin-box-fill'} color={'white'} w={'25px'}/>
        </div>
  )
}

export default SocialMedia
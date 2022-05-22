import React from 'react'
import { SocialMedia } from '../molecules'
import Images from '../../assets/Images'

const Footer = () => {
  return (
    
        <div className=" flex first-letter:py-1  bg-PrimarioColor5 mt-3 md:flex md:items-center md:justify-between">
        <SocialMedia/>
        <span className="text-sm text-gray-300"> © 2022  All Rights Reserved.</span>
        <img style={{width:'15rem', padding:'0'}}  src={Images.LogoBlancoEducamas} alt="LogoBlanco"/> 
        </div>
                
        
    
  )
}

export default Footer
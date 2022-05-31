import React from 'react'
import Images from "../../assets";


const ImgFase2 = () => {
    return (
        <div className='
            flex 
            flex-col
            justify-between 
            px-4
            py-3
            gap-4
            lg:flex-row
            lg:justify-around
        
        '>
            <img src={Images.imgform}  alt="FomulariosDiligenciados"/>
            <img src={Images.imginf}  alt="InformesDiligenciados"/>        
        </div>  
    )
}

export default ImgFase2
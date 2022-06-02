import React from 'react'
import Images from "../../assets";


const ImgFase2 = () => {
    return (
        <div className='
            grid 
            grid-col
            justify-center
            align-middle
            p-4
            gap-4
            items-center
            w-full
            lg:grid-cols-2
            lg:justify-center
        
        '>
            <div className='justify-center flex'>
                <img src={Images.imgform}  alt="FomulariosDiligenciados"/>
            </div>
            <div className='justify-center flex'>
                <img src={Images.imginf}  alt="InformesDiligenciados"/>        
            </div>
        </div>  
    )
}

export default ImgFase2
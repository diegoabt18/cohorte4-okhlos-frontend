import React from 'react';
import Images from '../../assets/Images'

const PhotoProfile = ({w,h}) => {
    return (
        <div>
            <img width={w} height={h} src={Images.Perfil} alt="FotoPerfil" /> 
        </div>
    )
}

export default PhotoProfile
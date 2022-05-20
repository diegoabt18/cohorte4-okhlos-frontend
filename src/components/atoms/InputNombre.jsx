import React from 'react'

const InputNombre = () => {
    return (
        <label className="block w-1/2">
            <span className="font-Roboto after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Nombre
            </span>
            <input 
                type="text" name="name" 
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                placeholder="Escribe el nombre(s)" 
            />
        </label>
    )
}

export default InputNombre
import {createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    columnas: [],
    codeColumnas: [],
    name: '',
    file: false
}

export const loadDataEstudentSlice = createSlice({
    name: 'dataEstudnetExcel',
    initialState,
    reducers: {
       
        setDataEstudent: (state, action) => {
           return{
                ...state,
                data: action.payload.data,
                columnas: action.payload.columnas,
                codeColumnas: action.payload.codeColumnas,
                name: action.payload.name,
                file: action.payload.file
           }
        },
        resetDataEstudent: () => {
            return {
                initialState
            }
         },
    
    },
   
})

// Action creators are generated for each case reducer function
export const { setDataEstudent, resetDataEstudent  } = loadDataEstudentSlice.actions

export const selectDataEstudentExcel = (state) => state.dataEstudnetExcel;

export default loadDataEstudentSlice.reducer
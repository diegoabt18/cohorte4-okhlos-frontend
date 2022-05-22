import {createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    columnas: [],
    codeColumnas: [],
    name: '',
    file: false
}

export const loadDataSlice = createSlice({
    name: 'dataExcel',
    initialState,
    reducers: {
       
        setData: (state, action) => {
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
export const { setData, resetDataEstudent  } = loadDataSlice.actions

export const selectDataExcel = (state) => state.dataExcel;

export default loadDataSlice.reducer
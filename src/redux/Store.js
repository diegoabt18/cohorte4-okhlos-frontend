import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import loadDataEstudentSlice from './slices/loadDataEstudentSlice'
import loadDataMentorSlice from './slices/loadDataMentorSlice'
import DataApiEstudentSlice from './slices/DataApiEstudentSlice'

export const store = configureStore({
  reducer: {
      counter:authSlice,
      dataEstudentExcel:loadDataEstudentSlice,
      dataMentorExcel:loadDataMentorSlice,
      dataEstudentApi:DataApiEstudentSlice
  },
})
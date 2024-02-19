import { configureStore } from '@reduxjs/toolkit'
import placeholderReducer from '../reducers'

const store = configureStore({
  reducer: placeholderReducer,
})

export default store

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ProfileSectionReducer from '../reducers/ProfileSection'
import postReducers from '../reducers/Post'
import JobsReducer from '../reducers/Jobs'

const globalReducer = combineReducers({
  profile: ProfileSectionReducer,
  posts: postReducers,
  jobs: JobsReducer,
})

const store = configureStore({
  reducer: globalReducer,
})

export default store

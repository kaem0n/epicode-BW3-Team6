import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import placeholderReducer from "../reducers";
import ProfileSectionReducer from "../reducers/ProfileSection";
import ExperienceReducer from "../reducers/Esxperience";
import postReducers from "../reducers/Post";

const globalReducer = combineReducers({
  profile: ProfileSectionReducer,
  experience: ExperienceReducer,
  posts: postReducers,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;

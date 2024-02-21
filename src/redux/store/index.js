import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import placeholderReducer from "../reducers";
import ProfileSectionReducer from "../reducers/ProfileSection";
import ExperienceReducer from "../reducers/Esxperience";

const globalReducer = combineReducers({
  profile: ProfileSectionReducer,
  experience: ExperienceReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;

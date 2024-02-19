import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import placeholderReducer from "../reducers";
import ProfileSectionReducer from "../reducers/ProfileSection";

const globalReducer = combineReducers({
  profile: ProfileSectionReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;

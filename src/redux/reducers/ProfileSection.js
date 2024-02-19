import { MY_PROFILE } from "../actions/ProfileSection";

const initialState = {
  profile: null,
};

const ProfileSection = (state = initialState, action) => {
  switch (action.type) {
    case MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};
export default ProfileSection;

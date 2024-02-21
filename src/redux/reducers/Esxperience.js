import {
  DELETE_EXPERIENCE,
  MY_EXPERIENCE,
  NEW_EXPERIENCE,
  UPDATE_EXPERIENCE,
} from "../actions/ProfileSection";

const initialState = {
  experiences: [],
  newExperience: {
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  },
};

export const myExperience = (state = initialState, action) => {
  switch (action.type) {
    case MY_EXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };

    case NEW_EXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };

    case DELETE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.filter(
          (experience) => experience.id !== action.payload
        ),
      };

    case UPDATE_EXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };

    default:
      return state;
  }
};

export default myExperience;

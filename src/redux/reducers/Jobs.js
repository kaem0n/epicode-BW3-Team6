import {
  END_LOAD_JOBS,
  LOAD_JOBS,
  SEARCH_JOBS,
} from '../actions/ProfileSection'

const initialState = {
  list: [],
  isLoading: false,
}

const JobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        list: action.payload,
      }
    case LOAD_JOBS:
      return {
        ...state,
        isLoading: true,
      }
    case END_LOAD_JOBS:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
export default JobsReducer

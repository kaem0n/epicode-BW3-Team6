import {
  ADD_POST,
  ADD_IMAGE_TO_POST,
  SET_IMAGE,
} from "../actions/ProfileSection";
const initialState = {
  posts: [],
  image: null,
};
const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ADD_IMAGE_TO_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.postId
            ? {
                ...post,
                imageUrl: action.payload.imageUrl,
              }
            : post
        ),
      };
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };

    default:
      return state;
  }
};
export default postReducers;

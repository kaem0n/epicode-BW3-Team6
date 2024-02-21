export const MY_PROFILE = "MY_PROFILE";
export const MY_EXPERIENCE = "MY_EXPERIENCE";
export const NEW_EXPERIENCE = "NEW_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";
export const ADD_POST = "ADD_POST";
export const ADD_IMAGE_TO_POST = "ADD_IMAGE_TO_POST";
export const SET_IMAGE = "SET_IMAGE";

export const myProfile = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/me";
  const API_KEY =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII";
  return async (dispatch) => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: API_KEY,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: MY_PROFILE, payload: data });
      } else {
        throw new Error(`${res.status} - Errore nella fetch`);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const myExperience = (data) => {
  return {
    type: MY_EXPERIENCE,
    payload: data,
  };
};

export const newExperience = (field, value) => {
  return {
    type: NEW_EXPERIENCE,
    payload: { [field]: value },
  };
};

export const deleteExperience = (experienceId) => {
  return {
    type: DELETE_EXPERIENCE,
    payload: experienceId,
  };
};
export const updateExperience = (updatedExperience) => {
  return {
    type: UPDATE_EXPERIENCE,
    payload: updatedExperience,
  };
};
export const addPost = (text) => {
  return {
    type: ADD_POST,
    payload: text,
  };
};
export const addImageToPost = (postId, imageUrl) => {
  return {
    type: ADD_IMAGE_TO_POST,
    payload: { postId, imageUrl },
  };
};
export const setImage = (image) => ({
  type: SET_IMAGE,
  payload: image,
});

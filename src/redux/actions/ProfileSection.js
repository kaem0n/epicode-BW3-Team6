export const MY_PROFILE = 'MY_PROFILE'
export const ADD_POST = 'ADD_POST'
export const ADD_IMAGE_TO_POST = 'ADD_IMAGE_TO_POST'
export const SET_IMAGE = 'SET_IMAGE'
export const DELETE_FROM_FAVOURITES = 'DELETE_FROM_FAVOURITES'
export const SEARCH_JOBS = 'SEARCH_JOBS'
export const LOAD_JOBS = 'LOAD_JOBS'
export const END_LOAD_JOBS = 'END_LOAD_JOBS'

export const myProfile = (api) => {
  const url = 'https://striveschool-api.herokuapp.com/api/profile/me'
  return async (dispatch) => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: api,
        },
      })
      if (res.ok) {
        const data = await res.json()
        dispatch({ type: MY_PROFILE, payload: data })
      } else {
        throw new Error(`${res.status} - Errore nella fetch`)
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  }
}
export const addImageToPost = (postId, imageUrl) => {
  return {
    type: ADD_IMAGE_TO_POST,
    payload: { postId, imageUrl },
  }
}
export const setImage = (image) => ({
  type: SET_IMAGE,
  payload: image,
})
export const deleteFromFavouriteAction = (postId) => {
  return {
    type: DELETE_FROM_FAVOURITES,
    payload: postId,
  }
}

export const searchJobs = (jobs) => ({
  type: SEARCH_JOBS,
  payload: jobs,
})

export const jobsLoading = () => ({
  type: LOAD_JOBS,
})

export const endJobsLoading = () => ({
  type: END_LOAD_JOBS,
})

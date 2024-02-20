export const MY_PROFILE = 'MY_PROFILE'

export const myProfile = () => {
  const url = 'https://striveschool-api.herokuapp.com/api/profile/me'
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTIxMzI0ZjYwNTAwMTkzN2Q0NWMiLCJpYXQiOjE3MDgzMzE1NDAsImV4cCI6MTcwOTU0MTE0MH0.Zl9ZBSk3lglgtHuX1aKTRzEJzPZ3CRCArwETLUu8CII'
  return async (dispatch) => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: API_KEY,
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

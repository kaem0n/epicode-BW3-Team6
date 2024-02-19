export const MY_PROFILE = "MY_PROFILE";

export const myProfile = (data) => {
  return {
    type: MY_PROFILE,
    payload: data,
  };
};

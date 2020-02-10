import request from "superagent";
export const ALL_IMAGES = "ALL_IMAGES";
const baseUrl = "http://localhost:4000";
export const NEW_IMAGE = "NEW_IMAGE";
export const JWT = "JWT";
// login should dispatch the JWT from the /login
// responsebody inside an action with type JWT

function loginFun(payload) {
  return {
    type: JWT,
    payload
  };
}
export const login = (email, password) => dispatch => {
  // console.log("3", password);
  const data = {
    email: email,
    password: password
  };
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      dispatch(loginFun(response.body));
    })
    .catch(console.error);
};

function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}
// export const createImage = data => (dispatch, getState) => {
//   const state = getState();
//   const { user } = state;
//   request
//     .post(`${baseUrl}/images`)
//     .set("Authorization", `Bearer ${user}`)
//     .send(data)
//     .then(response => {
//       dispatch(newImage(response.body));
//     })
//     .catch(console.error);
// };
export const createImage = (data, token) => dispatch => {
  // console.log("data", data);
  // console.log("token", token.jwt);
  request
    .post(`${baseUrl}/images`)
    .set("Authorization", `Bearer ${token.jwt}`)
    .send(data)
    .then(response => {
      dispatch(newImage(response.body));
    })
    .catch(console.error);
};

function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}
export const getImages = () => (dispatch, getState) => {
  const state = getState();
  // console.log("state from actions", state); // {images: Array(0)}
  const { images } = state;
  if (!images.length) {
    request(`${baseUrl}/images`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

// const initialState = [];
export default function(state = "", action = {}) {
  switch (action.type) {
    case "JWT": {
      // console.log("2", action.payload); // getting the jwt
      return action.payload;
    }
    default:
      return state;
  }
}

// The user reducer should use an empty string as its inital state,
// unlike the images reducer which uses an empty array.
// The user reducer should respond to JWT by returning the
// action's payload to save the token to the state.

const INITIAL_STATE = {
  loggedUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setLoggedUser":
      return {
        ...state,
        loggedUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

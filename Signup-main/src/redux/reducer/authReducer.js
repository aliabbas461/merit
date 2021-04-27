const initialState = {
  isAuthenticated: false,
  user: {},
  newtask: "",
  list: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SUCCESS_TODO":
      return { ...state, list: action.payload.data };

    default:
      return state;
  }
}

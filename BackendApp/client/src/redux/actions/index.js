import axios from "axios";

export const registerUser = (user, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/user/signup", user)
    .then((res) => history.push("/"))
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    });
};

export const loginUser = (user, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/user/login", user)
    .then((res) => {
      const { token } = res.data;
      console.log("Login", res.data);
      history.push("/crud");
      //setting auth token in local storage
      // localStorage.setItem("jwtToken", token);

      // setting auth token in axiox default headers
      // console.log(token);
      // setAuthToken(token);
    })
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    });
};

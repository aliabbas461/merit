import axios from "axios";
const getAccessToken = localStorage.getItem("jwtToken");

export const registerUser = (user, history) => (dispatch) => {
  axios
    .post("http://3aa4065a2e08.ngrok.io/api/user/signup", user)
    .then((res) => (window.location = "/"))
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    });
};

export const loginUser = (user, history) => (dispatch) => {
  axios
    .post("http://3aa4065a2e08.ngrok.io/api/user/login", user)
    .then((res) => {
      console.log(res);
      const token = res.data.token;
      window.location = "/crud";
      localStorage.setItem("jwtToken", token);
    })
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    });
};
axios.defaults.headers.common["Authorization"] = `Bearer ${getAccessToken}`;
export const createTodo = (user, history) => (dispatch) => {
  axios
    .post("http://3aa4065a2e08.ngrok.io/api/todo/add", user, {})
    .then((res) => console.log("Working", res.data))
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    });
};

export const getAllTodo = (user, history) => (dispatch) => {
  axios
    .get("http://3aa4065a2e08.ngrok.io/api/todo/all", user, {})
    .then((res) =>
      dispatch({
        type: "SUCCESS_TODO",
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    });
};

export const deleteTodo = (index, history) => (dispatch) => {
  axios
    .delete(`http://3aa4065a2e08.ngrok.io/api/todo/${index}`, {})
    .then((res) =>
      dispatch({
        type: "SUCCESS_TODO",
        payload: res,
      })
    )
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    });
};

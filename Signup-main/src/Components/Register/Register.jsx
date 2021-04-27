import React, { useState, useEffect } from "react";
import "./Register.scss";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Navbar from "../Navbar/Navbar";
import { Link, withRouter } from "react-router-dom";
import { registerUser } from "../../redux/actions/index";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register(props) {
  console.log(props);
  const classes = useStyles();
  const [customerSignUp, setCustomerSignUp] = useState({
    name: "",
    email: "",
    password: "",
    errors: {},
  });
  const [errors, setErrors] = useState("");

  // const validate = (values) => {
  //   let errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "Invalid Email";
  //   }

  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password too short";
  //   }

  //   return errors;
  // };

  const handleChange = (event) => {
    setCustomerSignUp({
      ...customerSignUp,
      [event.target.name]: event.target.value,
    });

    console.log("Working");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerUser(customerSignUp, props.history);
  };

  useEffect(() => {
    console.log(props.errors);
    if (props.errors) {
      setErrors(props.errors);
    }
  }, [props.errors]);

  return (
    <>
      <Navbar />
      <Container className="register_main" component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {errors ? (
                <Grid item xs={12}>
                  <div
                    className="danger_text"
                    dangerouslySetInnerHTML={{ __html: errors.message }}
                  />
                  {errors.message}
                </Grid>
              ) : null}
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required={true}
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>© Torque 2021. All rights reserved.</Box>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));

import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Crud.scss";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  TextField,
  Grid,
  Box,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { createTodo, getAllTodo, deleteTodo } from "../../redux/actions/index";
import { connect } from "react-redux";
import CardDetails from "./CardDetails";
import Navbar from "../Navbar/Navbar";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Crud(props) {
  console.log(props);
  const classes = useStyles();
  const [getTodoList, setTodoList] = useState({
    title: "",
    description: "",
  });
  const [getTodo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodoList({
      ...getTodoList,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.target.reset();
    e.preventDefault();
    props.createTodo(getTodoList, props.history);
  };

  useEffect(() => {
    if (props.auth.list) {
      setTodo(props.auth.list);
    }
  }, [props.auth.list]);

  useEffect(() => {
    props.getAllTodo();
  }, [props.auth.list]);

  return (
    <>
      <Navbar />
      <Grid item xs={12} className="crud_main">
        <Box p={10}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Box mb={5}>
              <Typography component="h1" variant="h5">
                TODO App
              </Typography>
            </Box>

            <Box mb={5}>
              <TextField
                onChange={handleChange}
                autoComplete="Title"
                name="title"
                variant="outlined"
                required={true}
                fullWidth
                id="title"
                label="Title"
                autoFocus
              />
            </Box>
            <Box mb={5}>
              <TextField
                onChange={handleChange}
                autoComplete="Description"
                name="description"
                variant="outlined"
                required={true}
                fullWidth
                id="description"
                label="Description"
                autoFocus
              />
            </Box>
            <Box mb={5}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
          <Divider />
          <Box my={5}>
            <Grid container spacing={2}>
              {(getTodo.todosList || []).map((item, i) => (
                <Grid item md={3} key={i}>
                  <Card className={classes.root}>
                    <Link
                      className="link"
                      to={{
                        pathname: `/cardDetails/${i}`,
                        state: {
                          fromNotifications: item,
                        },
                      }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            component="p"
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                    <CardActions className="button_center">
                      <Button variant="contained" color="primary">
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => props.deleteTodo(item._id)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { createTodo, getAllTodo, deleteTodo })(
  withRouter(Crud)
);

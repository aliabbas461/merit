import React from "react";
import { Link } from "react-router-dom";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const todoList = [
  {
    id: 1,
    primary: "Example TODO item",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero qui voluptatibus.",
  },
  {
    id: 2,
    primary: "This is Task Title",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero qui voluptatibus.",
  },
  {
    id: 3,
    primary: "Cool Task",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero qui voluptatibus.",
  },
  {
    id: 4,
    primary: "Yes! Another Cool Task",
    secondary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero qui voluptatibus.",
  },
];

export default function Crud() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className="crud_main">
        <Box p={10}>
          <Box mb={5}>
            <Typography component="h1" variant="h5">
              TODO App
            </Typography>
          </Box>
          <Box mb={5}>
            <TextField
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
              autoComplete="Text"
              name="Text"
              variant="outlined"
              required={true}
              fullWidth
              id="Text"
              label="Text"
              autoFocus
            />
          </Box>
          <Box mb={5}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
          <Divider />
          <Box my={5}>
            <Grid container spacing={2}>
              {todoList.map(({ id, primary, secondary }) => (
                <Grid item md={3}>
                  <Card className={classes.root}>
                    <Link
                      className="link"
                      params={{ testvalue: "hello" }}
                      to={`/cardDetails/${id}`}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {primary}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            component="p"
                          >
                            {secondary}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                    <CardActions className="button_center">
                      <Button variant="contained" color="primary">
                        Edit
                      </Button>
                      <Button variant="contained" color="secondary">
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

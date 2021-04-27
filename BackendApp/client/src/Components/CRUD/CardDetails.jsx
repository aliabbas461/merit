import React from "react";
import { Typography, makeStyles, Grid, Box } from "@material-ui/core";

export default function CardDetails(props) {
  const id = props.match.params.id;

  return (
    <>
      <div>
        <Grid item xs={12}>
          <Box p={10}>
            <Typography gutterBottom variant="h5" component="h2">
              Some Random Text of {id}
            </Typography>
          </Box>
        </Grid>
      </div>
    </>
  );
}

import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
export default function CardDetails(props) {
  // const { fromNotifications } = props.location.state;
  // console.log(fromNotifications);
  return (
    <>
      <div>
        <Grid item xs={12}>
          <Box p={10}>
            <Typography gutterBottom variant="h5" component="h2">
              Some Random Text of
            </Typography>
          </Box>
        </Grid>
      </div>
    </>
  );
}

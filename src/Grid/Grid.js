import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [loading, setloading] = useState(false);
    const [Case, setCase] = useState(null);
    const [Deths, setDeths] = useState(null); 

    useEffect(() => {

        axios({
            method: "GET",
            url: "https://www.hpb.health.gov.lk/api/get-current-statistical",
        }).then((Response) => {
            setloading(true);
            setCase(Response.data.data.local_active_cases);
            setDeths(Response.data.data.global_deaths);
            // setCase(Response.data.data.update_date_time);
            // console.log(Response.data.data.local_active_cases);
        }).catch((error) => {
            console.log(error);
        })

    }, [])


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Cases:<h3>{loading ? Case : <div>Loading</div>}</h3></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{loading ? Deths : <div>Loading</div>}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DateFromTime } from 'es-abstract/es5';



const useStyles = makeStyles((theme) => ({
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
  const [Total, setTotal] = useState(null);
  const [Case, setCase] = useState(null);
  const [Deths, setDeths] = useState(null);
  const [Recover, setRecover] = useState(null);
  const [Ccase, setCcase] = useState(null);
  const [Time,setTime] = useState(null);
  useEffect(() => {

    axios({
      method: "GET",
      url: "https://www.hpb.health.gov.lk/api/get-current-statistical",
    }).then((Response) => {
      setloading(true);
      setTotal(Response.data.data.local_total_cases);
      setCase(Response.data.data.local_active_cases);
      setDeths(Response.data.data.local_deaths);
      setRecover(Response.data.data.local_recovered);
      setCcase(Response.data.data.local_new_cases);
      setTime(Response.data.data.update_date_time);
    }).catch((error) => {
      console.log(error);
    })

  }, [])
 
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="fixed">
      <h1>Local Cases</h1><p>Last updated at (GMT+5:30): {loading ? Time : <div>Getting Data...</div>}</p>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
      <div style={{ flexGrow: 1}}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}><h2>New Cases</h2><h1>{loading ? Ccase : <div>Getting Data...</div>}</h1></Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Total Cases : {loading ? Total : <p>Getting Data...</p>}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Hospitalized:{loading ? Case : <p>Getting Data...</p>}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Recoveries : {loading ? Recover : <p>Getting Data...</p>}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Deaths : {loading ? Deths : <p>Getting Data...</p>}</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
    </Container>
    <br></br>
    </React.Fragment>
  );
}

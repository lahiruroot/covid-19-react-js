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
  // const [Cactive,setCactive] = useState(null);


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
    }).catch((error) => {
      console.log(error);
    })

  }, [])


 

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="fixed">
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
      <div style={{ flexGrow: 1}}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}><h2>Total Cases:</h2><h1>{loading ? Total : <div>Getting Data...</div>}</h1></Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>New Cases : {loading ? Ccase : <div>Getting Data...</div>}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Hospitalized:{loading ? Case : <div>Getting Data...</div>}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Recoveries : {loading ? Recover : <div>Getting Data...</div>}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Deaths : {loading ? Deths : <div>Getting Data...</div>}</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
      </Container>
    </React.Fragment>
  );
}

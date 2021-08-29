import React from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


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

export default function Globle() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [loading, setloading] = useState(false);
    const [Total, setTotal] = useState(null);
    const [NewRecovered, setNewrecover] = useState(null);
    const [Deths, setDeths] = useState(null);
    const [Recover, setRecover] = useState(null);
    const [Cases, setCases] = useState(null);
    const [Time, setTime] = useState(null);

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://api.covid19api.com/summary",
        }).then((Response) => {
            setloading(true);
            setCases(Response.data.Global.NewConfirmed);
            setTotal(Response.data.Global.TotalConfirmed);
            setNewrecover(Response.data.Global.NewRecovered)
            setDeths(Response.data.Global.NewDeaths);
            setRecover(Response.data.Global.TotalDeaths);
            setTime(Response.data.Global.Date);
        }).catch((error) => {
            console.log(error);
        })
    }, [])


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="fixed">
                <h1>Daily  Global Cases</h1>
                <p>Last updated at (UTC): {loading ? Time : <div>Getting Data...</div>}</p>
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <div style={{ flexGrow: 1 }}>
                        <div className={classes.root}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}><h2>New Cases</h2><h1>{loading ? Cases : <div>Getting Data...</div>}</h1></Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>Total Cases : {loading ? Total : <p>Getting Data...</p>}</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>New recover:{loading ? NewRecovered : <p>Getting Data...</p>}</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>Total Deaths : {loading ? Recover : <p>Getting Data...</p>}</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>New Deaths : {loading ? Deths : <p>Getting Data...</p>}</Paper>
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


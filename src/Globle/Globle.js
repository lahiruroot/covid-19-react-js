import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <h1>Globle Cases</h1>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>ghuisdhihui</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>gsdgsidhgsu</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>xs=12 sm=6</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    )
}

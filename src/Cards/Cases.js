import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'



const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [loading, setloading] = useState(false);
    const [Case, setCase] = useState(null);

    useEffect(() => {

        axios({
            method: "GET",
            url: "https://www.hpb.health.gov.lk/api/get-current-statistical",
        }).then((Response) => {
            setloading(true);
            setCase(Response.data.data.local_active_cases);
            // setCase(Response.data.data.update_date_time);
            // console.log(Response.data.data.local_active_cases);
        }).catch((error) => {
            console.log(error);
        })

    }, [])

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    Cases: {loading ? Case : <div>Loading</div>}
                </Typography>
            </CardContent>
        </Card>
    );
}
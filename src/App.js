import axios from 'axios';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));



export default class App extends React.Component {

  state = {
    loading: true,
    cases: null
  };
  async componentDidMount() {
    axios({
      method: "GET",
      url: "https://www.hpb.health.gov.lk/api/get-current-statistical",
    }).then((Response) => {
      this.setState({
        loading: false,
        cases: Response.data
      })
      // console.log(Response.data.data.local_active_cases);
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return this.state.loading ? <div>
      <CircularProgress />
    </div> : <div>{this.state.cases.data.local_active_cases}<br />{this.state.cases.data.local_deaths}</div>

  }
}

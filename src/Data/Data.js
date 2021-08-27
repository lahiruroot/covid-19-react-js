import React, { Component } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: 30,
    },
  }));

export default class Data extends Component {

    state = {
        loading: true,
        cases: null
      };

    componentDidMount(){
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
        
            <Paper elevation={3} />
    return this.state.loading ? <div>
      <LinearProgress />

    </div> : <div>Locaal Cases {this.state.cases.data.local_active_cases}<br />Local Death {this.state.cases.data.local_deaths}</div>
        
    }
}

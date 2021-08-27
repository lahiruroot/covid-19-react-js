import axios from 'axios';
import React, { Component } from 'react';

export default class App extends React.Component {

  state = {
    loading: true,
    cases: null
  };
  async componentDidMount() {
    axios({
      method: "GET",
      url:"https://www.hpb.health.gov.lk/api/get-current-statistical",
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
    // if (this.state.loading) {
    //   return <div>loading...</div>;
    // }else{
    //   <div>{this.state.cases}</div>
    // }
    // // if (!this.state.cases) {
    // //   return <div>didn't get a cases</div>;
    // // }
    return this.state.loading ? <div>Loading</div> : <div>{this.state.cases.data.local_active_cases}<br/>{this.state.cases.data.local_deaths}</div>
    
  }
}

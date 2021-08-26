import './App.css';
import React, { Component } from 'react';
import { render } from 'react-dom';


export default class App extends React.Component {
  constructor() {
    super();
    this.setState = {
      data: false
    }
  }
  componentDidMount() {
    let url = "https://hpb.health.gov.lk/api/get-current-statistical";
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/jason',
        'Content-TYpe': 'application/jason',
      }
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp })
      })
    })
  }


  render() {
  const data = this.state.data;
    console.warn(data);
    return (<div>
      <h1>
        123
      </h1>
    </div>)
  }

}

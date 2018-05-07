import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

// this is a stateful component

class AstronomyContainer extends Component {

  constructor() {
    super();
    this.state = {
      astronomy: []
    }
  }

  componentDidMount() {
    const API_KEY = 'hGq9uKIAh8jT9S7NiUQCTkFnyvfPuZjpAjBpZ1bP';
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

    axios.get(END_POINT+API_KEY)
      .then(response => {

        this.setState({
          astronomy: response.data
        })

        console.log(response)
      })
      .catch(error => {
        console.log(error, 'failed to fetch data')
      });
  }

  render() {
    const {astronomy} = this.state;

    return(
      <AstronomyCard data={astronomy} />
    )
  }

}

export default AstronomyContainer;

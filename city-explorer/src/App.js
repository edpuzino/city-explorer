import React, { Component } from "react";
import Header from "./scripts/header.js";
import Form from "./scripts/form.js";
import Map from "./scripts/map.js";
import Weather from "./scripts/weather.js";
import Yelp from "./scripts/yelp.js";
import Meetups from "./scripts/meetups.js";
import Movies from "./scripts/movies.js";
import Trails from "./scripts/trails.js";
import "./styles/app.css";

let superagent = require("superagent");

const API = "https://city-explorer-backend.herokuapp.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      location: {},
      data: {
        weather: [],
        yelp: [],
        meetups: [],
        movies: [],
        trails: []
      }
    };
  }

  updateCity = e => {
    let city = e.target.value;
    this.setState({ city });
  };

  searchCity = async e => {
    e.preventDefault();

    try {
      let location = await this.getLocation();
      let serviceCalls = this.getData(location);
      let [weather, yelp, meetups, movies, trails] = await Promise.all(
        serviceCalls
      );

      this.setState({
        location: location.body,
        data: {
          weather: weather.body,
          yelp: yelp.body,
          meetups: meetups.body,
          movies: movies.body,
          trails: trails.body
        }
      });
    } catch (e) {
      console.error("Fetch Error", e);
    }
  };

  getLocation = () => {
    return superagent.get(`${API}/location`).query({ data: this.state.city });
  };

  getData = location => {
    let serviceCalls = [];

    Object.keys(this.state.data).forEach(service => {
      let url = `${API}/${service}`;
      serviceCalls.push(
        superagent
          .get(url)
          .query({ data: location.body })
          .ok(res => true)
      );
    });

    return serviceCalls;
  };

  render() {
    let validLocation = this.state.location && this.state.location.id;

    return (
      <React.Fragment>
        <Header />
        <Form handleChange={this.updateCity} handleSubmit={this.searchCity} />

        {!validLocation ? null : (
          <React.Fragment>
            <Map location={this.state.location} />

            <div className="column-container">
              <Weather data={this.state.data.weather} />
              <Yelp data={this.state.data.yelp} />
              <Meetups data={this.state.data.meetups} />
              <Movies data={this.state.data.movies} />
              <Trails data={this.state.data.trails} />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;


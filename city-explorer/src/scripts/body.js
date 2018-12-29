import React from 'react';
import 'react-router-dom';
let superagent = require('superagent');

class Body extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      method: 'get',
      city: ''
    };    
  }

  updateCity = (event) => {
    this.setState({ city: event.target.value});
  };

  locateCity = (event) => {
    event.preventDefault();
    let api = 'https://city-explorer-backend.herokuapp.com/location';
    console.log(api);
    alert(this.state.city);
    superagent(this.state.method, api).query({data: this.state.city}).then(location => {
      console.log(location);
      //displayMap(location);
      //getResource('weather', location);
      //getResource('movies', location);
      //getResource('yelp', location);
      //getResource('meetups', location);
      //getResource('trails', location);
      })
      .catch(error => {
        console.log('WTF');
        //compileTemplate([error], 'error-container', 'error-template');
        //$('#map').addClass('hide');
        //$('section, div').addClass('hide');
      });
  }
/*
  displayMap = (location) => {
  $('.query-placeholder').text(`Here are the results for ${location.formatted_query}`);

  $('#map').removeClass('hide');
  $('section, div').removeClass('hide');

  $('#map').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude}%2c%20${location.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`)
}

getResource = (resource, location) => {
  $.get(`${'https://city-explorer-backend.herokuapp.com'}/${resource }`, {data: location})
    .then(result => {
      compileTemplate(result, `${resource}-results`, `${resource}-results-template`);
    })
    .catch(error => {
      compileTemplate([error], 'error-container', 'error-template');
    })
}

compileTemplate = (input, sectionClass, templateId) => {
  $(`.${sectionClass}`).empty();

  let template = Handlebars.compile($(`#${templateId}`).text());

  input.forEach(element => {
    $(`.${sectionClass}`).append(template(element));
  })
}
*/
  render() {
    return (
      <React.Fragment>
        <main>
          <form id="search-form" onChange={this.updateCity}>
            <label htmlFor="search">Search for a location</label>
            <input type="text" name="search" id="input-search" placeholder="Enter a location here"></input>
            <button type="submit" onSubmit={this.locateCity}>Explore!</button>
          </form>

          <img id="map" className ="hide" src="" alt="Map of search query"></img>

          <h2 className="query-placeholder"></h2>
      
          <section className="error-container"></section>
      
          <div className="column-container hide">

            <section>
              <h3>Results from the Dark Sky API</h3>

              <ul className="weather-results"></ul>
            </section>        

            <section className="yelp-container">
              <h3>Results from the Yelp API</h3>

              <ul className="yelp-results"></ul>
            </section>        

            <section>
              <h3>Results from the Meetup API</h3>

              <ul className="meetups-results"></ul>
            </section>        

            <section className="movie-container">
              <h3>Results from The Movie DB API</h3>

              <ul className="movies-results"></ul>
            </section>        

            <section>
              <h3>Results from the Hiking Project API</h3>

              <ul className="trails-results"></ul>
            </section>
          </div>
        </main>
        
        <footer>
        </footer>
      </React.Fragment>
    );      
  }
}


export default Body;





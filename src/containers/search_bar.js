import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props)  {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //bind the context of 'this' to
    //overwrite / give onInputChange the correct
    //context for 'this' -
    //the context of our Component class
  }

  onInputChange(event)  {
    //remember all DOM event handlers need the
    //vanilla JS event object
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //**Call the ActionCreator whenever the user
    //submits the form
    //Now we need to go and fetch weather data
    //using this.state.term
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render()  {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast for the cities of your choice"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // { fetchWeather } causes an ActionCreator, returns an Action
  // bindActionCreators binds it to 'dispatch' makes sure that that
  // Action flows down into the middleware
  return bindActionCreators({ fetchWeather }, dispatch);
}

//previously we had components/containers that were
//mapping State to Props as well,
//null is a placeholder because
//whenever we pass in a function that is
//supposed to map our dispatch to a container,
//it goes in as the SECOND argument
export default connect(null, mapDispatchToProps)(SearchBar);

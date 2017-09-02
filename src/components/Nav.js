import React, { Component } from 'react';
import superagent from 'superagent';//NPM package that makes http requests
import { connect } from 'react-redux'
import actions from '../actions/index'

class Nav extends Component {

  constructor() {
    super()

    this.state = {
      zipCode: '',
      filter: 'food'
    }
  }

  searchVenues(event) {
    event.preventDefault()
    console.log('searchVenues: ' + this.state.zipCode)

    const url = 'https://api.foursquare.com/v2/venues/search'

    const params = {
      v:'20140806',
      near: this.state.zipCode,
			client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
			client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ',
      query: this.state.filter
    }

    superagent
    .get(url)
    .query(params)
    .set('Accept', 'application/json')
    .end((err, response) => {
        const venues = response.body.response.venues
      //console.log('RESPONSE: ' + JSON.stringify(venues))
      this.props.venuesReceived(venues)
    })
  }

  changeFilter(event) {
    console.log('changeFilter: ')
    this.setState({
      filter: event.target.value
    })
  }

  updateZipcode(event) {
      //console.log('updateZipcode: ' + event.target.value)

      this.setState({
        zipCode: event.target.value
      })
  }

  render() {
    return(

    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
        <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input onChange={this.updateZipcode.bind(this)} className="form-control" type="text" placeholder="Enter Zip Code or City" />
              <select id="filter" onChange={this.changeFilter.bind(this)} style={{marginLeft:12}} className="form-control">
                <option value="food">Food</option>
                <option value="coffee">Coffee</option>
                <option value="clothing">Shopping</option>
                <option value="music">Music</option>
                <option value="fitness">Fitness</option>
              </select>
            </div>
            <button style={{marginLeft:12}} onClick={this.searchVenues.bind(this)} className="btn btn-default">Search</button>
        </form>
        </div>
      </div>
    </nav>
    );
  }
}

const stateToProps = (state) => {
  return {
    venues: state.venue
  }
}

const dispatchToProps = (dispatch) => {
  return {
    venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
  }
}

export default connect(stateToProps, dispatchToProps)(Nav);

import React, { Component } from 'react'
import { connect } from 'react-redux'
//import actions from '../actions/index'

class Venues extends Component {
  render() {

    const venues = this.props.venues || []

    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <ol>
          { venues.map((venue, i) => {
              return(
                <li key={venue.id}>
                  <div style={{padding:12, marginBottom:12, background:'#f9f9f9'}}>
                    <h4 style={{marginBottom:0}}>{venue.name}</h4>
                    <span>{venue.location.address}</span><br />
                    <a href={venue.url}>{venue.url}</a>
                  </div>
                </li>
              )
            })
          }
        </ol>
        </div>
      </div>
    )
 }
}

const stateToProps = (state) => {
  return {
    venues: state.venue.venues//Reference to store reducer and key
  }
}

export default connect(stateToProps)(Venues)

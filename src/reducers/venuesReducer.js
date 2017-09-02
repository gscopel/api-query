import constants from '../constants'

var initialState = {
  venues: null
}

export default (state = initialState, action) => {

  switch (action.type) {

    case constants.VENUES_RECEIVED:
      console.log('VENUES_RECEIVED: ' + JSON.stringify(action.venues))
      let updated = Object.assign({}, state)
      updated['venues'] = action.venues
      return updated

    default:
      return state
  }

}

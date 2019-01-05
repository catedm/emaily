import { FETCH_USER } from '../actions/types';


// state is initally set to null here, because while our app is figuring out whether
// or not our user is logged in, we do not want any content to show up
// if the user is logged in, the action.payload will return the user object
// if they are not logged in, false is returned
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER: {
      return action.payload || false;
    }
    default:
      return state;
  }
}
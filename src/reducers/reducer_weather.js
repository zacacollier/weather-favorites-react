//binding 'rigid' values for action.type
//will prevent undesirable State Mutations
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type)  {
    case FETCH_WEATHER:
    //We don't MUTATE STATE:
    // 'return state.push(action.payload.data);''
    //We return a new instance of state:
    // return state.concat([action.payload.data]);

    // this spread operator says 'take all entries that might
    // be outside of our new array
    // and place them inside of it (at the front)'
    return [ action.payload.data, ...state ];
  }
  return state;
}

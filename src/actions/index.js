import axios from 'axios';

const API_KEY = 'ebcfb65992d0cf8f0c5eb893f1fe49bd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//this is where we build state with Actions!

export const FETCH_WEATHER = 'FETCH_WEATHER';

//Build an ActionCreator
export function fetchWeather(city)  {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  //ActionCreator always have to return an action:
  return {
    //An action is an OBJECT which always has to have property 'type'
    type: FETCH_WEATHER,
    //A payload is an additional property that goes along with properties
    //that describe the mechanism of this particular action

    //returning the Promise as the payload
    //to be sent to the reducers
    payload: request
  };
}

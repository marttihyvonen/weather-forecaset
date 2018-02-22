import axios from 'axios';

const OPEN_WEATHER_MAP_API_KEY = "62e3fca2b41f8736f208f7cf529d45cc";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + OPEN_WEATHER_MAP_API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    console.log(request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

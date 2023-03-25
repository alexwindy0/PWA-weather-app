import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '5600207096d3ab57e2d3251d0d0d050f';

//'f33a48cf794d08d0148762789aaba32';


 export  const fetchWeather = async (query) => {
    //destructure respondns to get data    
    const { data } = await axios.get(URL, {

        //specify second paramaters in axios
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,

        }
    }); 

    return data;
}
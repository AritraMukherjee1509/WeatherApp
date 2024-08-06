import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city,SetCity] = useState("");
    let [error,SetError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = "801bddf0817c37d6afce3fdddba6abcf";

    let getWeatherInfo = async () => {
        // eslint-disable-next-line no-useless-catch
        try {
            if (error == true) {
                SetError(false);
            }
            let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        SetCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault(); 
            SetCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        } catch (err) {
            SetError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit'>SEARCH</Button>
            </form>
            {error && <p style={{color : "red"}}> No Such Place Exist</p>}
        </div>
    )
}
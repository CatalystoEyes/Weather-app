import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'
import styles from './WeatherItem.module.scss'
const WeatherItem = () => {
    const [city, setCity] = useState<string>('')
    const [weatherData, setWeatherData] = useState(null)

    const searchWeather = (city: string) => {
        const fetchData = async () => {
            const url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=XWAZ14a13bOJ5dDrbwHV6R5DB48D279T`
            try {
                const response = await axios.get(url);
                setWeatherData(response.data)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData()
        setCity('')
    }
    const handleChange = (event: any) => {
        setCity(event.target.value)
    };

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <Box sx={{
                marginTop: '25px', bgcolor: "background.default",
                color: "text.primary",
            }}>
                <Box sx={{
                    display: 'flex', alignItems: 'center', flexDirection: 'column', bgcolor: "background.default",
                    color: "text.primary",
                }}>
                    <form className={styles.weather_form} onSubmit={handleSubmit} onChange={handleChange}>
                        <TextField
                            id="filled-basic"
                            label="Enter city"
                            variant="outlined"
                            sx={{ marginRight: '8px' }}
                            onChange={e => setCity(e.target.value)}
                            onKeyPress={e => {
                                if (e.key === "Enter") {
                                    const inputElement = e.target as HTMLInputElement;
                                    searchWeather(inputElement.value);
                                }
                            }}
                            value={city}
                        />
                        <Button onClick={() => searchWeather(city)} variant="contained" endIcon={<TravelExploreIcon />}>
                            Search
                        </Button>
                    </form>
                </Box>

            </Box>
            <WeatherInfo weatherData={weatherData} />
        </>
    );
};

export default WeatherItem;
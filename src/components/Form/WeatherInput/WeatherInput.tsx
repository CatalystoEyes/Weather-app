// import { TextField, Button } from '@mui/material';
// import TravelExploreIcon from '@mui/icons-material/TravelExplore';
// import { useState } from 'react';
// import axios from 'axios';
// const WeatherInput = () => {
//     const handleChange = (event: React.SyntheticEvent<HTMLFormElement>) => {
//         console.log(event.currentTarget);
//     };

//     const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
//         event.preventDefault();
//     };
//     const [city, setCity] = useState()
//     const [weatherData, setWeatherData] = useState(null);

//     const searchWeather = (city: any) => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api.tomorrow.io/v4/weather/realtime', {
//                     params: { location: { city }, apikey: 'XWAZ14a13bOJ5dDrbwHV6R5DB48D279T' },
//                     headers: { accept: 'application/json' }
//                 });
//                 setWeatherData(response.data);
//                 console.log(response.data)
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchData();
//     }

//     return (
//         <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }} onChange={handleChange}>
//             <TextField
//                 id="filled-basic"
//                 label="Enter city"
//                 variant="outlined"
//                 style={{ marginRight: 8 }}
//                 onChange={e => setCity(e.target.value)} onKeyPress={e => e.key === "Enter" && searchWeather(city)} value={city}
//             />
//             <Button onClick={() => searchWeather(city)} variant="contained" endIcon={<TravelExploreIcon />}>Search</Button>
//         </form>
//     );
// };

// export default WeatherInput;
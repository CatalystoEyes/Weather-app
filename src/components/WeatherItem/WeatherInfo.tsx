import { Box, Card, Typography } from "@mui/material"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
const WeatherInfo = ({ weatherData }: any) => {
    return (
        <Box sx={{
            marginTop: '25px', bgcolor: "background.default",
            color: "text.primary",
        }}>
            <Box sx={{
                display: 'flex', alignItems: 'center', flexDirection: 'column', bgcolor: "background.default",
                color: "text.primary",
            }}>
                <Box sx={{
                    paddingTop: "10px", paddingBottom: "10px",
                    textAlign: "center", outline: "none",
                    bgcolor: "background.default",
                    color: "text.primary",
                    zIndex: 3
                }}>
                    <Box sx={{
                        boxSizing: 'border-box',
                        bgcolor: "background.default",
                        color: "text.primary",
                    }}>
                        {weatherData ? (
                            <>
                                <Card sx={{
                                    padding: '5px 8px', margin: '7px',
                                    flexGrow: 1, bgcolor: "background.default",
                                    color: "text.primary"
                                }}><DriveFileRenameOutlineIcon /><Typography>{weatherData.location.name}</Typography></Card>
                                <Card sx={{
                                    padding: '5px 8px', margin: '7px',
                                    flexGrow: 1, bgcolor: "background.default",
                                    color: "text.primary"
                                }}><DeviceThermostatIcon /><Typography>Temperature: {weatherData.data.values.temperature} °C</Typography></Card>
                                <Card sx={{
                                    padding: '5px 8px', margin: '7px',
                                    flexGrow: 1, bgcolor: "background.default",
                                    color: "text.primary"
                                }}><AirIcon /><Typography>Wind speed: {weatherData.data.values.windSpeed} m/s</Typography></Card>
                                <Card sx={{
                                    padding: '5px 8px', margin: '7px',
                                    flexGrow: 1, bgcolor: "background.default",
                                    color: "text.primary"
                                }}><WbCloudyIcon /><Typography>Cloud cover: {weatherData.data.values.cloudCover} points</Typography></Card>
                                <Card sx={{
                                    padding: '5px 8px', margin: '7px',
                                    flexGrow: 1, bgcolor: "background.default",
                                    color: "text.primary"
                                }}><ThunderstormIcon />
                                    <Typography>Rain intensity: {weatherData.data.values.rainIntensity} points</Typography></Card></>
                        ) : <Box sx={{ padding: '10vh' }}><Typography fontSize={35}>Weather forecast
                        </Typography></Box>}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default WeatherInfo;
import { AppBar, Box, CardActions, IconButton, ThemeProvider, Toolbar, Typography, createTheme, useTheme } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import About from "./About/About";
import Footer from "./Footer/Footer";
import Avatar from "./Avatar/Avatar";
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import WeatherItem from "../WeatherItem/WeatherItem";
const ColorModeContext = createContext({ toggleColorMode: () => { } });

const Weather = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            bgcolor: "background.default",
            color: "text.primary",
        }}
        >
            <CardActions sx={{ margin: "auto", display: "flex", justifyContent: "end", padding: '0' }}>
                <AppBar position="sticky" sx={{ padding: "0", margin: 0, top: 0, width: '100vw' }}>
                    <Toolbar sx={{ padding: "0" }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <CloudCircleIcon />Weather app
                        </Typography>
                        <Avatar />
                        <IconButton sx={{ ml: 1, display: "flex" }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </CardActions>
            <Box sx={{ padding: "0", paddingBottom: "0" }}>
                <Box sx={{
                    bgcolor: "background.default",
                    color: "text.primary",
                }}>
                    <WeatherItem />
                    <About />
                </Box>
                <Footer />
            </Box>
        </Box >
    )
};


const WeatherApp = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#ef5350'
                    },
                },
            }),
        [mode],
    );
    return (
        <Box sx={{
            width: "100vw", height: "100vh", bgcolor: "background.default",
            color: "text.primary",
        }}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <Weather />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </Box>
    )
}

const Homepage = () => {
    return (
        <WeatherApp />
    )
}

export default Homepage;

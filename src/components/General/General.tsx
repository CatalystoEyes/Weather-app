import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Alert, IconButton, ThemeProvider, createTheme, useTheme } from '@mui/material';
import "./App.module.scss"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AuthInput from '../Form/AuthInput/AuthInput';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const MyCard = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <React.Fragment>
            <Alert severity="info">Just a few steps for meteorological magic!</Alert>

            <CardContent sx={{ padding: "20px 40px" }}>
                <Typography variant="h1" component="div" sx={{ fontSize: 28, textAlign: 'center' }} color="text.black" gutterBottom>
                    Authorization
                </Typography>
                <div>
                    <AuthInput />
                </div>
            </CardContent>
            <CardActions sx={{ position: "relative", margin: "auto", display: "flex", justifyContent: "center", paddingTop: "3px", paddingBottom: "20px" }}>
                <IconButton sx={{ ml: 1, display: "flex" }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness4Icon />}
                </IconButton>
            </CardActions>
        </React.Fragment >
    )
};

const MyApp = () => {

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            width: "100vw",
            height: "100vh",
        }}>
            <Card variant="outlined">
                <MyCard />
            </Card >
        </Box >
    );
}

const MainApp = () => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
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
        <Box sx={{ width: "100vw", height: "100vh" }}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <MyApp />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </Box>
    );
}

const General = () => {
    return (
        <div>
            <MainApp />
        </div>
    )
}

export default General

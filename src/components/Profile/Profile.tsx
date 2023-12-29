import { Avatar, Typography, Box, Grid, createTheme, ThemeProvider, IconButton, useTheme, Card, Link } from '@mui/material';
import { users } from '../Types/users/AuthUsers';
import { createContext, useContext, useMemo, useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';
import { red } from '@mui/material/colors';
const ColorModeContext = createContext({ toggleColorMode: () => { } });

const ProfileChildren = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <>
            <Box sx={{
                height: "100vh",
                width: "100vw",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Link href='/home' underline="none"><IconButton sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1, color: red[500] }}>
                    <LogoutIcon sx={{ color: red[400] }} /></IconButton></Link>
                <IconButton sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1 }}
                    onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness4Icon />}
                </IconButton>
                <Box sx={{ textAlign: 'center' }}>
                    <Avatar src={users.avatar} sx={{
                        width: "75%",
                        height: "75%",
                        margin: '0 auto',
                        border: '2px solid #fff',
                        borderRadius: '50%'
                    }} />
                    <Typography variant="h5" component="h1" sx={{ marginTop: 4 }}>{users.username}</Typography>
                    <Typography variant="subtitle1" component="p" color="text.secondary" sx={{ marginBottom: 2 }}>
                        {`@user-id`}
                    </Typography>

                    <Card variant='outlined'>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'underline' }}>
                                    Email:
                                </Typography>
                                <Typography variant="body1">{users.email}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'underline' }}>
                                    Password:
                                </Typography>
                                <Typography variant="body1">{users.password}</Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Box>
        </>
    );
};

const MyProfile = () => {

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: "100vh",
            bgcolor: 'background.default',
            color: 'text.primary',
        }}>
            <Card>
                <ProfileChildren />
            </Card >
        </Box >
    );
}

const Profile = () => {
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
                },
            }),
        [mode],
    );

    return (
        <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <MyProfile />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </Box>
    );
}

export default Profile;
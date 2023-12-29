import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

const actions = [
    { icon: <DataObjectIcon />, name: 'Weather api', url: "https://www.tomorrow.io/weather-api/" },
    { icon: <GitHubIcon />, name: 'GitHub', url: "https://github.com/CatalystoEyes" },
];


export default function About() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{
            height: '70vh', bottom: 0,
            width: "100%", position: "absolute",
            mb: "34px", bgcolor: "background.default",
            color: "text.primary"
        }}>
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={
                            <IconButton
                                component="a"
                                href={action.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {action.icon}
                            </IconButton>
                        }
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Box >
    );
}
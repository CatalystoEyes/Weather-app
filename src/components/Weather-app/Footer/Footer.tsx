import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
export default function Footer() {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{
            position: "absolute", bottom: 0,
            width: "100%", zIndex: 2, bgcolor: "background.default",
            color: "text.primary"
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            </BottomNavigation>
        </Box>
    );
}
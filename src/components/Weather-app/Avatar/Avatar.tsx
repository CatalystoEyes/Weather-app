import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { users } from '../../Types/users/AuthUsers';
import { Link } from '@mui/material';

const settings = [
    { title: 'Profile', url: '/profile', id: 1 },
    { title: 'Logout', url: '/login', id: 2 }];

function ResponsiveAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User icon" src={users.avatar} sx={{ border: '1px solid #fff', borderRadius: '50%' }} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <Typography sx={{ textAlign: "center" }} variant="h5">User</Typography>
                {settings.map((setting) => (
                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                        <Link href={setting.url} underline="none" color="inherit">
                            <Typography textAlign="center">
                                {setting.title}</Typography></Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box >
    );
}
export default ResponsiveAppBar;
import React from 'react';
import { AppBar as MUIAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { GlobalStore } from '../../store/store';

export default function AppBar() {

    const openNavDrawer = () => {
        GlobalStore.update(state => {
            state.isDrawerOpen = true
        })
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MUIAppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={openNavDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Age Tracker
                    </Typography>
                </Toolbar>
            </MUIAppBar>
        </Box>
    );
}

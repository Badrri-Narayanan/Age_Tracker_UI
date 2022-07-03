import { List, ListItem, ListItemButton, ListItemText, Box, Typography, Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '../../components/AppBar';
import CollapsibleNavDrawer from '../../components/CollapsibleNavDrawer';

function Navigation() {
    return (
        <div className="home">
            <AppBar />
            <CollapsibleNavDrawer>
                <Typography variant="h4" style={{ paddingLeft: '10px', paddingBottom: '50px', paddingTop: '10px' }} component="h4">
                    Age Tracker
                </Typography>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <Divider />
                    <nav aria-label="pages">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton href="/Age_Tracker_UI/#/home">
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton href="/Age_Tracker_UI/#/add-new-person">
                                    <ListItemText primary="Add new Person" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                    <Divider />
                </Box>
            </CollapsibleNavDrawer>
            <Outlet />
        </div>
    );
}

export default Navigation;

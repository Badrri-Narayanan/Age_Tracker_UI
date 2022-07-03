import { List, ListItem, ListItemButton, ListItemText, Box, Typography, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar';
import CollapsibleNavDrawer from '../../components/CollapsibleNavDrawer';
import InfoTable from '../../components/InfoTable';
import { GlobalStore } from '../../store/store';

type ResponseRow = {
    id: number,
    name: string,
    date_of_birth: string,
    age: {
        year: number,
        month: number
    }
}

const updateLoadingStatus = (status: boolean) => {
    GlobalStore.update(state => {
        state.isDataFetching = status
    })
}

function Home() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        updateLoadingStatus(true);
        fetch('https://age-tracker-api.herokuapp.com/people/all')
            .then(resp => resp.json())
            .then((response) => {
                const rowList = response.map((i: ResponseRow) => ({
                    'name': i.name,
                    'dateOfBirth': new Date(i.date_of_birth).toLocaleDateString('en-GB'),
                    'age': `${i.age.year} Years ${i.age.month} Months`,
                    'id': i.id
                }))
                setRows(rowList)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                updateLoadingStatus(false)
            })
    }, [setRows])

    return (
        <div className="home">
            <AppBar />
            <InfoTable rows={rows} />
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
        </div>
    );
}

export default Home;

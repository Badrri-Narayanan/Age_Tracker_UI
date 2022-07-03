import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { GlobalStore } from '../../store/store';
import './styles.css'

type Props = {
    children: React.ReactNode
}

const CollapsibleNavDrawer: React.FC<Props> = (props) => {
    const isDrawerOpen = GlobalStore.useState(s => s.isDrawerOpen);

    const closeNavDrawer = () => {
        GlobalStore.update(state => {
            state.isDrawerOpen = false
        })
    }

    return (
        <div className='collapsible-nav-drawer-container'>
            <Drawer
                className='collapsible-drawer'
                open={isDrawerOpen}
                onClose={closeNavDrawer}
            >
                {props.children}
            </Drawer>
        </div>
    );
}

export default CollapsibleNavDrawer;

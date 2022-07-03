import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { GlobalStore } from '../../store/store';

export default function LoadingScreen() {
    const isDataFetching = GlobalStore.useState(s => s.isDataFetching);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isDataFetching}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

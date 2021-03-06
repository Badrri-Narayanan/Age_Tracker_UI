import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type Props = {
    open: boolean
    setOpen: (isOpen: boolean) => void
    result: boolean
}

const ResultModal: React.FC<Props> = ({ open, setOpen, result }) => {
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            style={{ textAlign: 'center' }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Result
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {
                        result ? 'Profile created successfullly' : 'Unable to create profile'
                    }
                </Typography>
                <Button
                    onClick={() => handleClose()}
                    style={{ margin: '10px' }}
                    variant='contained'>Okay</Button>
            </Box>
        </Modal>
    );
}

export default ResultModal;

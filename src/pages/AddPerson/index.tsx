import { Box, Button, Stack, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import './styles.css';
import ResultModal from '../../components/ResultModal';

function AddPerson() {
    const [name, setName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null)
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);
    const [result, setResult] = useState(false)

    const setOpen = (status: boolean) => {
        setIsResultModalOpen(status)
    }

    const handleOnSubmit = () => {
        setOpen(true)
        fetch('https://age-tracker-api.herokuapp.com/people/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                'date_of_birth': dateOfBirth && dateOfBirth.toISOString().split("T")[0]
            })
        })
            .then(resp => resp.json())
            .then((response) => {
                if (response.length) {
                    setResult(true)
                }
            }).catch((err) => {
                console.log(err)
                setResult(false)
            })
    }

    const isValidEntry = name.length < 3 || dateOfBirth === null
        || (dateOfBirth !== null && dateOfBirth.toLocaleDateString('en-GB').length !== 10)

    return (
        <div className='add-new-person'>
            <Box
                component='form'
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete='off'
            >
                <Stack className='inputs-container'>
                    <TextField
                        id='outlined-basic'
                        type='text'
                        label=' Please Enter Your Name Here'
                        variant='outlined'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <LocalizationProvider style={{ width: '300px' }} dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label='Please Enter Date of Birth'
                            inputFormat='dd/MM/yyyy'
                            value={dateOfBirth}
                            onChange={(value) => setDateOfBirth(value)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Stack>
                <Button
                    onClick={handleOnSubmit}
                    disabled={isValidEntry}
                    variant='contained'>Submit</Button>
            </Box>
            {
                isResultModalOpen && <ResultModal open={isResultModalOpen} setOpen={setOpen} result={result} />
            }
        </div>
    );
}

export default AddPerson;

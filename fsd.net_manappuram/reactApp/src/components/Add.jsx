import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = () => {
  return (
    
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="EMPLOYE NAME"
        />
        </div>
        <div>
        <TextField
          
          id="outlined-disabled"
          label="EMPLOYE AGE"
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="EMPLOYE LOCATION"
          autoComplete="current-password"
        />
        </div>
        <div>
            <Button varient='contained'>ADD</Button>
        </div>
      
        
       
        </Box>

    
  )
}

export default Add
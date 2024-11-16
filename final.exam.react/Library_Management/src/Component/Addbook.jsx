import { Box, TextField, Button, Typography } from '@mui/material';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import createTheme and ThemeProvider
import shopimg from '../images/book.jpg';

const theme = createTheme({
  palette: {
    background: {
      default: 'white',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${shopimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        },
      },
    },
  },
});

const Addbook = () => {
  return (
    <ThemeProvider theme={theme}> {/* Wrap your component with ThemeProvider */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 400,
          margin: 'auto',
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'rgba(245, 245, 245, 0.8)', // Semi-transparent background for readability
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" gutterBottom>
          Add Book
        </Typography>

        <TextField
          id="outlined-basic"
          label="Book Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          id="filled-basic"
          label="Author"
          variant="filled"
          fullWidth
          margin="normal"
        />

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Book Type</FormLabel>
          <RadioGroup row aria-label="book-type" name="row-radio-buttons-group">
            <FormControlLabel value="ShortStory" control={<Radio />} label="Short Story" />
            <FormControlLabel value="Novel" control={<Radio />} label="Novel" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <TextField
          id="standard-basic"
          label="Additional Notes"
          variant="standard"
          fullWidth
          margin="normal"
        />

        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Addbook;

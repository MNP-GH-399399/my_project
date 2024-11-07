import React, { useState } from 'react';
import { useEffect } from 'react';
import shopimg from '../images/trendz.jpg'

import gif from '../images/shoppy.webp'
import { 
  Container, 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Link,
  CssBaseline,
  AppBar
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { CenterFocusStrong } from '@mui/icons-material';


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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phn, setPhone] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login attempt with:', { email, password });
       if(email !=""){
         navigate('/Home');
       }

       try {
        const response = await fetch('http://localhost:44350/api/Employees/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Email:email, Password:password}),
        });
    
        if (!response.ok) {
          throw new Error('Registration failed');
        }else{
          navigate('/Navbar');
        }
    
        const data = await response.json();
        console.log('Registration successful:', data);
      } catch (error) {
        console.error('Registration error:', error);
      }

  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log('Forgot password for:', email);
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    console.log('Registration attempt with:', { email, password, name,phn });
  
    try {
      const response = await fetch('http://localhost:44350/api/Employees/AddUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email:email, Password:password, Name:name,phone:phn,status:1}),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      } 
      const data = await response.json();
      console.log('Registration successful:', data);    
    } catch (error) {
      console.error('Registration error:', error);     
    }
  };
  
  return (  
   
    <ThemeProvider theme={theme}>
    <Container  component="main" maxWidth="xs" sx={{backgroundColor: 'white', marginLeft:'650px'}}>
  
      <Box className=''
      
        sx={{
          
          opacity:0.8,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',        
           alignItems: 'center',
        }}
      >
            <AppBar position="static"   sx={{backgroundColor:'#FF0000' }}>
       <Typography position="center"  variant="h4" height="60px">
          ELEGANCE
          </Typography>
          </AppBar>
      <CssBaseline />
          <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
            {!showForgotPassword && !showRegistration && (
              <>
                <Typography component="h1" variant="h5" align="center" gutterBottom>
                  LOGIN
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="User Name"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ 
                      mt: 3, 
                      mb: 2, 
                      backgroundColor: 'red', 
                      
                    }}
                  >
                    Login
                  </Button>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Link href="#" variant="body2" onClick={() => setShowForgotPassword(true)}>
                      Forgot password?
                    </Link>
                    <Link href="#" variant="body2" onClick={() => setShowRegistration(true)}>
                      New user? Register
                    </Link>
                  </Box>
                </Box>
              </>
            )}
            {showForgotPassword && (
              <>
                <Typography component="h1" variant="h5" align="center" gutterBottom>
                  Forgot Password
                </Typography>
                <Box component="form" onSubmit={handleForgotPassword} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Reset Password
                  </Button>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Link href="#" variant="body2" onClick={() => setShowForgotPassword(false)}>
                      Back to Sign In
                    </Link>
                  </Box>
                </Box>
              </>
            )}
            {showRegistration && (
              <>
                <Typography component="h1" variant="h5" align="center" gutterBottom>
                  Register
                </Typography>
                <Box component="form" onSubmit={handleRegistration} noValidate sx={{ mt: 1 }}>
                <TextField
  margin="normal"
  required
  fullWidth
  name="name"
  label="Name"
  type="text"
  id="name"
  autoComplete="name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<TextField
  margin="normal"
  required
  fullWidth
  name="phone"
  label="Phone"
  type="tel"
  id="phone"
  autoComplete="tel"
  value={phn}
  onChange={(e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(input);
  }}
  inputProps={{
    maxLength: 10,
    pattern: '[0-9]*'
  }}
/>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Register
                  </Button>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Link href="#" variant="body2" onClick={() => setShowRegistration(false)}>
                      Already have an account? Sign In
                    </Link>
                  </Box>
                </Box>
              </>
            )}
          </Paper>
        </Box>
    </Container>
    </ThemeProvider>
   
  );
};

export default Login;